var keystone = require('keystone'),
    sitemapGen = require('../lib/sitemap-gen'),
    Types = keystone.Field.Types;

var Article = new keystone.List('Article', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
    label: 'Статья',
    singular: 'Статья',
    plural: 'Статьи'
});

Article.add({
    title: {
        type: String,
        required: true,
        label: 'Заголовок'
    },
    slug: {
        type: String,
        index: true
    },
    state: {
        type: Types.Select,
        options: 'draft, published, archived',
        default: 'draft',
        index: true,
        label: 'Состояние'
    },
    publishedDate: {
        type: Types.Date,
        index: true,
        label: 'Дата публикации'
    },
    content: {
        type: Types.Html,
        wysiwyg: true,
        height: 600,
        label: 'Текст'
    },
    category: {
        type: Types.Relationship,
        ref: 'ServiceCategory'
    },
    tags: {
        type: Types.Relationship,
        ref: 'ArticleTag',
        many: true
    },
    lastEditDate: {
        type: Types.Date,
        index: true,
        hidden: true
    }
});

Article.defaultColumns = 'title, state|20%, publishedDate|20%';

Article.schema.pre('save', function(next) {
    if (this.isModified()) {
       this.lastEditDate = new Date();
    }

    next();
});

Article.schema.post('save', function() {
    sitemapGen();
});

Article.register();
