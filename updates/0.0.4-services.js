var keystone = require('keystone'),
    async = require('async'),
    Service = keystone.list('Service'),
    services = [
        { name: 'Экскаватор гусеничный hyundai R220LC-9S', slug: 'hyundai_R220LC-9S', priority: 0, showInFooter: true, state: 'published' },
        { name: 'Экскаватор колесный hyundai R130W-3', slug: 'hyundai_R130W-3', priority: 10, showInFooter: true, state: 'published' },
        { name: 'Погрузчик фронтальный komatsu WA180-3 Active', slug: 'komatsu_WA180-3_Active', priority: 20, showInFooter: true, state: 'published' },
        { name: 'Экскаватор-погрузчик komatsu WB93S-5E0', slug: 'komatsu_WB93S-5E0', priority: 30, showInFooter: true, state: 'published' },
        { name: 'Самосвал iveco Trakker AD410T42H', slug: 'iveco_Trakker_AD410T42H', priority: 40, showInFooter: true, state: 'published' },
        { name: 'Самосвал камаз 55111A', slug: 'kamaz_55111A', priority: 50, showInFooter: true, state: 'published' },
        { name: 'Самосвал камаз 6520-06', slug: 'kamaz_6520-06', priority: 60, showInFooter: true, state: 'published' },
        { name: 'Землесосный снаряд ЗГМД 400/20', slug: 'zgmd400-20', priority: 70, showInFooter: true, state: 'published' },

        { name: 'Доставка торфа', slug: 'peat_shipping', priority: 100, showInFooter: true, state: 'published' },
        { name: 'Доставка песка', slug: 'sand_shipping', priority: 110, showInFooter: true, state: 'published' },
        { name: 'Доставка щебня', slug: 'sand_gravel', priority: 120, showInFooter: true, state: 'published' },
        { name: 'Доставка грунта', slug: 'sand_ground', priority: 130, showInFooter: true, state: 'published' },
        { name: 'Доставка био-грунта', slug: 'sand_manure-ground', priority: 140, showInFooter: true, state: 'published' },

        { name: 'Разработка котлована', slug: 'pit_development', priority: 200, showInFooter: true, state: 'published' },
        { name: 'Выемка грунта под пруд', slug: 'excavation_for_water', priority: 210, showInFooter: true, state: 'published' },
        { name: 'Копание траншеи', slug: 'trench_excavation', priority: 220, showInFooter: true, state: 'published' },
        { name: 'Вывоз грунта', slug: 'ground_disposal', priority: 230, showInFooter: true, state: 'published' },
        { name: 'Планировка участков', slug: 'land_planning', priority: 240, showInFooter: true, state: 'published' },

        { name: 'Очистка дна от ила', slug: 'sludge_cleaning', priority: 300, showInFooter: true, state: 'published' },
        { name: 'Очистка дна от мусора', slug: 'garbage_cleaning', priority: 310, showInFooter: true, state: 'published' },
        { name: 'Удаление растительности', slug: 'vegetation_removal', priority: 320, showInFooter: true, state: 'published' },
        { name: 'Формирование берегового уреза', slug: 'shore-edge_development', priority: 330, showInFooter: true, state: 'published' },

        { name: 'Вывоз строительного мусора', slug: 'building-garbage_disposal', priority: 400, showInFooter: true, state: 'published' },
        { name: 'Вывоз крупногабаритного мусора', slug: 'huge-item-garbage_disposal', priority: 410, showInFooter: true, state: 'published' },

        { name: 'Снос строений', slug: 'buildings-destruct', priority: 500, showInFooter: true, state: 'published' }
    ];

function createService(service, done) {
    var newservice = new Service.model(service);

    newservice.save(function(err) {
        if (err) {
            console.error("Error adding service " + service.name + " to the database:");
            console.error(err);
        } else {
            console.log("Added service " + service.name + " to the database.");
        }
        done();
    });
}

exports = module.exports = function(done) {
    async.forEach(services, createService, done);
};