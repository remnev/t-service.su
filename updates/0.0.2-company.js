var keystone = require('keystone'),
    Company = keystone.list('Company');

exports = module.exports = function(done) {
    var company = new Company.model({
        name: 'Транссервис',
        slug: 'transservice',
        logoname: 'Транс сервис',
        email: 'contact@t-service.su',
        phone: {
            code: 495,
            number: '120-56-40'
        },
        workTime: {
            days: 'ежедневно',
            time: 'c 8:00 до 21:00'
        },
        motto: 'Возьмем тяжелую работу на себя',
        address: '142430, Московская область, Ногинский район, с. Ямкино, Центральная усадьба'
    });

    company.save(function(err) {
        if (err) {
            console.error('Err:', err);
        } else {
            console.log("Added done");
        }
        done();
    });
};