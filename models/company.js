var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Company = new keystone.List('Company');

Company.add({
    name: {
        type: Types.Text,
        label: 'Название'
    },
    slug: {
        type: Types.Text,
        label: 'Slug'
    },
    logoname: {
        type: Types.Text,
        label: 'Название для логотипа'
    },
    email: { type: Types.Email },
    phone: {
        code: {
            type: Types.Number,
            label: 'Код города'
        },
        number: {
            type: Types.Text,
            label: 'Номер телефона'
        }
    },
    workTime: {
        days: {
            type: Types.Text,
            label: 'Дни работы'
        },
        time: {
            type: Types.Text,
            label: 'Время работы'
        }
    },
    motto: {
        type: Types.Text,
        label: 'Слоган компании'
    },
    aboutCompany: {
        type: Types.Html,
        wysiwyg: true,
        height: 300,
        label: 'О компании'
    },
    address: { type: Types.Text, label: 'Адрес' }
});

Company.register();