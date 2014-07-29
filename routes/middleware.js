/**
 * This file contains the common middleware used by your routes.
 * 
 * Extend or replace these functions as your application requires.
 * 
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */

var _ = require('underscore'),
    querystring = require('querystring'),
    keystone = require('keystone'),
    async = require('async');


/**
    Initialises the standard view locals

    The included layout depends on the navLinks array to generate
    the navigation in the header, you may wish to change this array
    or replace it with your own templates / logic.
*/

exports.initLocals = function(req, res, next) {
    var locals = res.locals;

    locals.navLinks = [
        { label: 'Компания', key: 'company',  href: '/' },
        { label: 'Услуги',   key: 'services', href: '/services/' },
        { label: 'Контакты', key: 'contact',  href: '/contact/' }
    ];

    locals.user = req.user;
    locals.fullYear = new Date().getFullYear();

    async.parallel({
        company: getCompany,
        categories: getCategories,
        services: getServices
    }, function(err, results) {
        if (err) throw err;

        locals.company = results.company;
        locals.categories = results.categories;
        locals.services = results.services;

        next();
    });
};


/**
    Fetches and clears the flashMessages before a view is rendered
*/

exports.flashMessages = function(req, res, next) {
    var flashMessages = {
        info: req.flash('info'),
        success: req.flash('success'),
        warning: req.flash('warning'),
        error: req.flash('error')
    };

    res.locals.messages = _.any(flashMessages, function(msgs) { return msgs.length }) ? flashMessages : false;

    next();
};


/**
    Prevents people from accessing protected pages when they're not signed in
 */

exports.requireUser = function(req, res, next) {
    if (!req.user) {
        req.flash('error', 'Please sign in to access this page.');
        res.redirect('/keystone/signin');
    } else {
        next();
    }
}

function getCompany(cb) {
    keystone.list('Company').model
        .findOne()
        .where('slug', 'transservice')
        .exec(function(err, company) {
            if (err) throw err;

            cb(null, company);
        });
}

function getCategories(cb) {
    keystone.list('ServiceCategory').model
        .find()
        .select('name slug showInFooter showInUnderheadMenu')
        .sort({ priority: 1 })
        .exec(function(err, categories) {
            if (err) cb(err);

            cb(null, categories);
        });
}

function getServices(cb) {
    keystone.list('Service').model
        .find()
        .where({ state: 'published' })
        .select('name image content categories slug showInFooter price')
        .populate('serviceCategory categories')
        .sort({ priority: 1 })
        .exec(function(err, services) {
            if (err) cb(err);

            cb(null, services);
        });
}
