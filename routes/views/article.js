var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var view = new keystone.View(req, res),
        locals = res.locals,
        articleSlug = req.params.articleSlug,
        categorySlug = req.params.categorySlug;

    // Set locals
    locals.section = 'services';

    locals.categories.forEach(function(category) {
        if (category.slug === categorySlug) {
            locals.serviceCategory = category;
        }
    });

    // Load the current article
    view.on('init', function(next) {
        keystone.list('Article').model
            .findOne({
                state: 'published',
                slug: articleSlug
            })
            .populate('category')
            .exec(function(err, result) {
                if (!result || result.category.slug !== categorySlug) {
                    return res.status(404).render('errors/404');
                }

                locals.article = result;

                locals.title = result.title + ' — '
                             + locals.serviceCategory.name + ' — '
                             + 'Компания Транссервис';

                locals.metaDescription = result.metaDescription;

                next(err);
            });
    });

    // Render the view
    view.render('article');

};
