var keystone = require('keystone'),
    Types = keystone.Field.Types;

var ArticleTag = new keystone.List('ArticleTag', {
    autokey: { path: 'slug', from: 'name' },
    label: 'Теги',
    singular: 'Тег',
    plural: 'Теги'
});

ArticleTag.add({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        hidden: true
    }
});

ArticleTag.relationship({ ref: 'Article', path: 'tags' });

ArticleTag.register();
