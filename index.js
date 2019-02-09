require('dotenv').load();

const keystone = require('keystone');

keystone.init({
    'name': 't-service.su',
    'brand': 't-service.su',

    'less': 'public',
    'static': 'public',
    'favicon': 'public/favicon.ico',

    'views': 'templates/views',
    'view engine': 'pug',

    'emails': 'templates/emails',

    'auto update': true,

    'session': true,
    'auth': true,
    'user model': 'User',
    'cookie secret': '$9UOe(l0d[b^*DWQGb$1uGO4p!P(#+q$|t-vy!qqu!yd$lor[N&BD@="#)*"GTQ?',

    'wysiwyg cloudinary images': true,
    'wysiwyg additional options': {
        extended_valid_elements: 'script[src|width|height|charset]'
    }
});

keystone.import('models');

keystone.set('locals', {
    env: keystone.get('env'),
    utils: keystone.utils,
    editable: keystone.content.editable
});

keystone.set('routes', require('./routes'));

keystone.set('nav', {
    'Компания': 'companies',
    'Услуги': ['services', 'service-categories'],
    'Статьи': ['Article', 'ArticleTag'],
    'Сообщения': 'enquiries',
    'Пользователи': 'users'
});

keystone.start();
