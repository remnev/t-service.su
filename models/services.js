var keystone = require('keystone'),
    sitemapGen = require('../lib/sitemap-gen'),
    Types = keystone.Field.Types;

var Service = new keystone.List('Service');

Service.add({
    name: {
        type: String,
        index: true,
        required: true,
        label: 'Название'
    },
    slug: {
        type: String,
        initial: true,
        required: true,
        label: 'Название в URL (service_SLUG)',
        note: '/services/[category_SLUG]/[service_SLUG]/ Без пробелов!'
    },
    state: {
        type: Types.Select,
        options: 'draft, published, archived',
        default: 'draft',
        index: true,
        label: 'Состояние'
    },
    image: {
        type: Types.CloudinaryImage,
        label: 'Картинка'
    },
    content: {
        type: Types.Html,
        wysiwyg: true,
        height: 300,
        label: 'Описание'
    },
    categories: {
        type: Types.Relationship,
        ref: 'ServiceCategory',
        many: true,
        initial: true,
        required: true,
        label: 'Категория'
    },
    price: {
        value: {
            type: String,
            label: 'Цена'
        },
        unit: {
            type: String,
            label: 'Единица измерения'
        }
    },
    showInFooter: {
        type: Types.Boolean,
        label: 'Вывести в подвал'
    },
    date: {
        type: Types.Date,
        index: true,
        label: 'Дата создания'
    },
    priority: {
        type: Number,
        label: 'Приоритет для сортировки'
    },
    lastEditDate: {
        type: Types.Date,
        index: true,
        hidden: true
    }
});

Service.schema.pre('save', function(next) {
    if (this.isModified()) {
       this.lastEditDate = new Date();
    }

    next();
});

Service.schema.post('save', function() {
    sitemapGen();
});

Service.register();
