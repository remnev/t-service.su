var keystone = require('keystone'),
    builder = require('xmlbuilder'),
    fs = require('fs-extra'),
    path = require('path'),
    async = require('async'),
    dateFormat = require('dateformat'),
    pathToSave = path.join(__dirname, '../public/sitemap.xml');

module.exports = function() {

    async.parallel({
        company: getCompany,
        services: getServices,
        articles: getArticles
    }, function(error, results) {
        if (error) throw error;

        fs.outputFile(pathToSave, generateXml(results), function(error) {
            if (error) throw error;
        });
    });

    function getCompany(cb) {
        keystone.list('Company').model
            .find()
            .where('slug', 'transservice')
            .select('lastEditDate')
            .exec(function(error, companies) {
                cb(error, companies[0]);
            });
    }

    function getServices(cb) {
        keystone.list('Service').model
            .find()
            .where('state', 'published')
            .populate('categories', 'slug')
            .select('lastEditDate categories')
            .sort('-lastEditDate')
            .exec(function(error, services) {
                cb(error, services);
            });
    }

    function getArticles(cb) {
        keystone.list('Article').model
            .find()
            .where('state', 'published')
            .populate('category', 'slug')
            .select('lastEditDate category slug')
            .exec(function(error, articles) {
                cb(error, articles);
            });
    }

    function generateXml(data) {
        var root = builder.create('urlset'),
            urls,
            usedCategories = [];

        root.att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
            .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
            .att('xsi:schemaLocation',
                 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd');

        urls = [
            {
                url: {
                    loc: 'http://t-service.su/',
                    lastmod: dateFormat(data.company.lastEditDate, 'isoDateTime'),
                    priority: '0.1'
                }
            },
            {
                url: {
                    loc: 'http://t-service.su/contact/',
                    lastmod: dateFormat(data.company.lastEditDate, 'isoDateTime'),
                    priority: '0.1'
                }
            }
        ];

        data.services.forEach(function(service) {
            var categorySlug = service.categories[0].slug;

            if (!~usedCategories.indexOf(categorySlug)) {
                usedCategories.push(categorySlug);

                urls.push({
                    url: {
                        loc: 'http://t-service.su/services/' + categorySlug + '/',
                        lastmod: dateFormat(service.lastEditDate, 'isoDateTime'),
                        priority: '0.5'
                    }
                });
            }

        });

        data.articles.forEach(function(article) {
            urls.push({
                url: {
                    loc: 'http://t-service.su/services/' + article.category.slug + '/' + article.slug + '/',
                    lastmod: dateFormat(article.lastEditDate, 'isoDateTime'),
                    priority: '0.6'
                }
            });
        });

        root.ele(urls);

        return root.end({
            pretty: true,
            indent: '  ',
            newline: '\n'
        });
    }

};
