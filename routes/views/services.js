var keystone = require('keystone'),
    async = require('async');

exports = module.exports = function(req, res) {
    var locals = res.locals,
        view = new keystone.View(req, res);

    // Если пришли по /services/, то редирект на раздел по умолчанию
    if (!req.params.category) {
        getDefaultCategory(function(err, defaultCategory) {
            res.redirect('/services/'+defaultCategory.slug+'/');
        });

        return;
    }

    // Set locals
    locals.section = 'services';

    locals.categories.forEach(function(category) {
        if (category.slug == req.params.category) {
            locals.serviceCategory = category;
        }
    });

    // Render the view
    view.render('services');
}

function getDefaultCategory(cb) {
    keystone.list('ServiceCategory').model
        .findOne()
        .where({ showAsDefaultCategory: true })
        .select('slug')
        .exec(function(err, defaultCategory) {
            if (err) cb(err);

            cb(null, defaultCategory);
        });
}