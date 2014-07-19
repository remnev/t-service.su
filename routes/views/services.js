var keystone = require('keystone'),
    async = require('async');

exports = module.exports = function(req, res) {
    var locals = res.locals,
        view = new keystone.View(req, res);

    locals.servicesCount = 0; // count services in their category

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

    locals.title = 'Компания Транссервис — Услуги — '+locals.serviceCategory.name;

    locals.metaDescription = locals.serviceCategory.name+': ';

    locals.services.forEach(function(service) {
        if (service.categories[0].slug == locals.serviceCategory.slug) {
            locals.metaDescription += service.name+', ';
            locals.servicesCount++;
        }
    });

    locals.metaDescription = locals.metaDescription.slice(0, -2);

    locals.metaDescription += ' — цены, описание, скидки.';

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
