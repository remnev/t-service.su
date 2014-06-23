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

    // On POST requests, add the Enquiry item to the database
    view.on('post', { action: 'contact' }, function(next) {
        // Если форма отправлена не из браузера — посылаем сразу
        if (locals.formData.action != 'contac') {
            return res.send(400);
        }

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

        return res.send(200);
    });

    view.render('contact');
}
