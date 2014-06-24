var keystone = require('keystone');

exports = module.exports = function(req, res) {
    var locals = res.locals,
        view = new keystone.View(req, res);

    // Set locals
    locals.section = 'company';

    locals.title = 'Компания Транссервис — О компании';

    locals.metaDescription = '';
    locals.categories.forEach(function(category) {
        locals.metaDescription += category.name+', '
    });
    locals.metaDescription = locals.metaDescription.slice(0, -2)+' — цены, сроки, скидки.';

    // Render the view
    view.render('index');
}
