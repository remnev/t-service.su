var keystone = require('keystone'),
    Enquiry = keystone.list('Enquiry');

exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res),
        locals = res.locals;

    // Set locals
    locals.section = 'contact';
    locals.enquiryTypes = Enquiry.fields.enquiryType.ops;
    locals.formData = req.body || {};
    locals.validationErrors = {};
    locals.enquirySubmitted = false;

    locals.title = 'Компания Транссервис — Контакты';

    locals.metaDescription = 'Компания Транссервис — контакты.';

    // On POST requests, add the Enquiry item to the database
    view.on('post', { action: 'contac' }, function(next) {
        var application = new Enquiry.model(),
            updater = application.getUpdateHandler(req);

        updater.process(req.body, {
            flashErrors: true,
            fields: 'name, email, phone, enquiryType, message',
            errorMessage: 'Форма не была отправлена:'
        }, function(err) {
            if (err) {
                res.json({ err: err.errors });
            } else {
                locals.enquirySubmitted = true;
                res.json({ success: true });
            }
        });
    });

    view.render('contact');
}
