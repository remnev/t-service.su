var keystone = require('keystone'),
    async = require('async'),
    ServiceCategory = keystone.list('ServiceCategory'),
    serviceCategories = [
        { name: 'Аренда спецтехники', slug: 'specmashines-rent', showAsDefaultCategory: true, priority: 0, showInFooter: true },
        { name: 'Доставка сыпучих грузов', slug: 'bulk-materials-shipping', priority: 10, showInFooter: true },
        { name: 'Земляные работы', slug: 'ground-works', priority: 20, showInFooter: true },
        { name: 'Работы на водоемах', slug: 'ponds-works', priority: 30, showInFooter: true },
        { name: 'Вывоз мусора', slug: 'garbage-disposal', priority: 40, showInFooter: true },
        { name: 'Снос строений', slug: 'buildings-destruct', priority: 50, showInFooter: true }
    ];

function createServiceCategory(serviceCategory, done) {
    var newserviceCategory = new ServiceCategory.model(serviceCategory);

    newserviceCategory.save(function(err) {
        if (err) {
            console.error("Error adding serviceCategory " + serviceCategory.name + " to the database:");
            console.error(err);
        } else {
            console.log("Added serviceCategory " + serviceCategory.name + " to the database.");
        }
        done();
    });
}

exports = module.exports = function(done) {
    async.forEach(serviceCategories, createServiceCategory, done);
};