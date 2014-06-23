$(function() {
    $form = $('.contact-form'),
    $status = $('.status');

    $form.on('submit', function(e) {
        $form.children('[name="action"]').val('contac');

        $.post('/contact/', $form.serialize())
            .done(function(data) {console.log(data);
                if (data.err) {
                    $status.text('Форма не была отправлена. Исправьте ошибки и попробуйте снова.');
                    for (var err in data.err) {
                        $form.find('input[name="'+err+'"]').parent('.form-group').addClass('has-error');
                    }
                } else {
                    $status.text('Сообщение успешно отправлено');
                    $form.hide();
                }
            })
            .error(function(err) {
                $status.text('Форма не была отправлена: '+err.statusText);
            });

        return false;
    });
});