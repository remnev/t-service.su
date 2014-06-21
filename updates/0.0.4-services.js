var keystone = require('keystone'),
    async = require('async'),
    Service = keystone.list('Service'),
    services = [
        {
            name: 'Экскаватор гусеничный hyundai R220LC-9S',
            slug: 'hyundai_R220LC-9S',
            priority: 0,
            state: 'published',
            image: {
                public_id: "jhcodt3gnwmmq7knwp2u",
                version: 1403075696,
                signature: "ea2eba5a0cfb853ee9a9616d68f7878847b786c2",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403075696/jhcodt3gnwmmq7knwp2u.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403075696/jhcodt3gnwmmq7knwp2u.png"
            },
            price: { unit: "руб/смена", value: "16 000" }
        },
        {
            name: 'Экскаватор колесный hyundai R130W-3',
            slug: 'hyundai_R130W-3',
            priority: 10,
            state: 'published',
            image: {
                public_id: "x5tv1mokhv2y3cco0xo5",
                version: 1403076828,
                signature: "58a42593450e2ca6d25c78a1a1d100321194cfb7",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403076828/x5tv1mokhv2y3cco0xo5.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403076828/x5tv1mokhv2y3cco0xo5.png"
            },
            price: { unit: "руб/смена", value: "13 000" }
        },
        {
            name: 'Погрузчик фронтальный komatsu WA180-3 Active',
            slug: 'komatsu_WA180-3_Active',
            priority: 20,
            state: 'published',
            image: {
                public_id: "qnpvlwho1swdzdxgqlp4",
                version: 1403028616,
                signature: "42a39f2f7fbf8ea72780b9627cf7b3ace8cf740c",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403028616/qnpvlwho1swdzdxgqlp4.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403028616/qnpvlwho1swdzdxgqlp4.png"
            },
            price: { unit: "руб/смена", value: "12 000" }
        },
        {
            name: 'Экскаватор-погрузчик komatsu WB93S-5E0',
            slug: 'komatsu_WB93S-5E0',
            priority: 30,
            state: 'published',
            image: {
                public_id: "haiylnhnwwqkhmmepk5o",
                version: 1403078524,
                signature: "9fd1cc558664cddd1c5108f224a980b4a223cb67",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403078524/haiylnhnwwqkhmmepk5o.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403078524/haiylnhnwwqkhmmepk5o.png"
            },
            price: { unit: "руб/смена", value: "12 000" }
        },
        {
            name: 'Самосвал iveco Trakker AD410T42H',
            slug: 'iveco_Trakker_AD410T42H',
            priority: 40,
            state: 'published',
            image: {
                public_id: "yn7rgf5xiup9qnnqr1kq",
                version: 1403079041,
                signature: "7d343f961d6d113b95720f1bcecc62327a799274",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403079041/yn7rgf5xiup9qnnqr1kq.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403079041/yn7rgf5xiup9qnnqr1kq.png"
            },
            price: { unit: "руб/смена", value: "15 000" }
        },
        {
            name: 'Самосвал камаз 55111A',
            slug: 'kamaz_55111A',
            priority: 50,
            state: 'published',
            image: {
                public_id: "tqdplwefzqbhyiqq1u7q",
                version: 1403079638,
                signature: "0765c45153624ae8b0882eb93f772314be4803af",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403079638/tqdplwefzqbhyiqq1u7q.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403079638/tqdplwefzqbhyiqq1u7q.png"
            },
            price: { unit: "руб/час", value: "900" }
        },
        {
            name: 'Самосвал камаз 6520-06',
            slug: 'kamaz_6520-06',
            priority: 60,
            state: 'published',
            image: {
                public_id: "gxdjsdctezpdx8appbqu",
                version: 1403080321,
                signature: "230dca05425250649ff94e3613f5cd152377d714",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403080321/gxdjsdctezpdx8appbqu.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403080321/gxdjsdctezpdx8appbqu.png"
            },
            price: { unit: "руб/смена", value: "10 000" }
        },
        {
            name: 'Землесосный снаряд ЗГМД 400/20',
            slug: 'zgmd400-20',
            priority: 70,
            state: 'published',
            image: {
                public_id: "lofku8sn48arnawlijhr",
                version: 1403080664,
                signature: "49d286995d397a66790ef43086ff6c099fdae9e3",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403080664/lofku8sn48arnawlijhr.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403080664/lofku8sn48arnawlijhr.png"
            },
            price: { unit: "руб/м³", value: "100" }
        },

        {
            name: 'Доставка торфа',
            slug: 'peat_shipping',
            priority: 100,
            showInFooter: true,
            state: 'published',
            image: {
                public_id: "wnnm8jfkke7jkjvnapfh",
                version: 1403157647,
                signature: "454ea3d546692c9ff37b8ba9319b61ff38db972c",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403157647/wnnm8jfkke7jkjvnapfh.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403157647/wnnm8jfkke7jkjvnapfh.png"
            },
            price: { unit: "руб/м³", value: "1000" },
            content: '<p>Предлагаем высококачественный торф с доставкой в кратчайшие сроки.</p>\r\n<p><em>Внимание: при заказе от 50 кубов, цена будет ниже.</em></p>'
        },
        {
            name: 'Доставка песка',
            slug: 'sand_shipping',
            priority: 110,
            showInFooter: true,
            state: 'published',
            image: {
                public_id: "e2nuuurkqsdpnyu7zash",
                version: 1403158442,
                signature: "7de2d077ba4c831e64a65cae56ab836922a364a0",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403158442/e2nuuurkqsdpnyu7zash.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403158442/e2nuuurkqsdpnyu7zash.png"
            },
            price: { unit: "руб/м³", value: "от 450" },
            content: '<p>Цены на доставку песка зависят от его вида, ниже приведен список цен.</p>\r\n<p><em>Внимание: при заказе от 50 кубов, цена будет ниже.</em></p>\r\n<table>\r\n<tbody>\r\n<tr>\r\n<td>Доставка намывного песка</td>\r\n<td>500 руб/м³</td>\r\n</tr>\r\n<tr>\r\n<td>Доставка карьерного песка</td>\r\n<td>450 руб/м³</td>\r\n</tr>\r\n</tbody>\r\n</table>'
        },
        {
            name: 'Доставка щебня',
            slug: 'gravel_shipping',
            priority: 120,
            showInFooter: true,
            state: 'published',
            image: {
                public_id: "hmivuwkiqv5umvrhlyq7",
                version: 1403159541,
                signature: "a4e8cdf7e63417730c07be6e60e1ee6f3ee6d262",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403159541/hmivuwkiqv5umvrhlyq7.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403159541/hmivuwkiqv5umvrhlyq7.png"
            },
            price: { unit: "руб/м³", value: "от 1300" },
            content: '<p>Цены на доставку щебня зависят от его вида и фракции, ниже приведен список цен.</p>\r\n<p><em>Внимание: при заказе от 50 кубов, цена будет ниже.</em></p>\r\n<table>\r\n<tbody>\r\n<tr>\r\n<td>Щебень гранитный</td>\r\n<td>\r\n<p>фракция 5/20 &mdash; 3000 руб/м&sup3;</p>\r\n<p>фракция 20/40 &mdash; 2800 руб/м&sup3;</p>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>Щебень известняковый</td>\r\n<td>\r\n<p>фракция 5/20 &mdash; 1800 руб/м&sup3;</p>\r\n<p>фракция 20/40 &mdash; 1800 руб/м&sup3;</p>\r\n<p>фракция 40/70 &mdash; 1600 руб/м&sup3;</p>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>Щебень гравийный</td>\r\n<td>2000 руб/м&sup3;</td>\r\n</tr>\r\n<tr>\r\n<td>Асфальтовая крошка</td>\r\n<td>1300 руб/м&sup3;</td>\r\n</tr>\r\n</tbody>\r\n</table>'
        },
        {
            name: 'Доставка грунта',
            slug: 'ground_shipping',
            priority: 130,
            showInFooter: true,
            state: 'published',
            image: {
                public_id: "qam3jczepeoyftgkzaxf",
                version: 1403159881,
                signature: "dd60db57738a5040ae04d809d4a62f09983c0fe9",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403159881/qam3jczepeoyftgkzaxf.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403159881/qam3jczepeoyftgkzaxf.png"
            },
            price: { unit: "руб/м³", value: "от 200" },
            content: '<p>Грунт используется для планировки участков, формировании насыпей, осушении болот и водоемов. Цена грунта указана с учетом доставки.</p><p><em>Внимание: при заказе от 50 кубов, цена будет ниже.</em></p>'
        },
        {
            name: 'Доставка навоза (био-грунта)',
            slug: 'manure-ground_shipping',
            priority: 140,
            showInFooter: true,
            state: 'published',
            image: {
                public_id: "nhqgdy1muuxpokyqnbak",
                version: 1403160394,
                signature: "d6585942e392bbdcbdcdb66b017a5dcebac6b8e7",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403160394/nhqgdy1muuxpokyqnbak.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403160394/nhqgdy1muuxpokyqnbak.png"
            },
            price: { unit: "руб/м³", value: "1000" },
            content: '<p>Мы предлагаем конский высококачественный навоз. Навоз используется для удобрения, подкормки, наполнения почвы минеральными веществами.</p>\r\n<p><em>Внимание: при заказе от 50 кубов, цена будет ниже.</em></p>'
        },

        {
            name: 'Разработка котлована',
            slug: 'pit_development',
            priority: 200,
            showInFooter: true,
            state: 'published',
            image: {
                public_id: "rwh3jsb1nbonq5ippzyz",
                version: 1403162653,
                signature: "065e5167a7800656616c6c6564ae4992edab3eb0",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403162653/rwh3jsb1nbonq5ippzyz.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403162653/rwh3jsb1nbonq5ippzyz.png"
            },
            content: '<p>Наша компания выполняет работы по разработке котлованов. В нашем штате высококлассные операторы-экскаваторщики с огромным опытом. Котлованы &mdash; одна из приоритетных наших услуг, потому что у нас есть большой опыт и мы отвечаем за качество.</p>\r\n<p>Котлованы под многоквартирные и промышленные объекты реализуем по вашему проекту.</p>\r\n<p>Котлованы под индивидуальное строительство &mdash; проектируем и реализуем.</p>'
        },
        {
            name: 'Копание траншеи',
            slug: 'trench_excavation',
            priority: 210,
            showInFooter: true,
            state: 'published',
            image: {
                public_id: "qicynmquqkdu0ibvlngd",
                version: 1403163291,
                signature: "bbcb2cd664403a456fb9eaa6ff393923f6b92ed4",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403163291/qicynmquqkdu0ibvlngd.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403163291/qicynmquqkdu0ibvlngd.png"
            },
            content: '<p>Копаем траншеи под трубопроводы, газопроводы, фундаменты. Также траншеи используются в качетсве &ldquo;пожарного щита&rdquo; или как средство ограничения проезда в природоохранную или опасную зону.</p>'
        },
        {
            name: 'Вывоз грунта',
            slug: 'ground_disposal',
            priority: 220,
            showInFooter: true,
            state: 'published',
            image: {
                public_id: "b0gy14z2iuqpsw68mskx",
                version: 1403163727,
                signature: "e34d55bfae95b30b7f8f5f9ef7c4c178e779db87",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403163727/b0gy14z2iuqpsw68mskx.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403163727/b0gy14z2iuqpsw68mskx.png"
            },
            content: '<p>Вывозим грунт с объектов заказчика. В нашем доступе всегда есть полигоны для разгрузки грунта в любых объемах.</p>'
        },
        {
            name: 'Планировка участков',
            slug: 'land_planning',
            priority: 230,
            showInFooter: true,
            state: 'published',
            image: {
                public_id: "byg8xj2welb4xzdfg8el",
                version: 1403164051,
                signature: "58862d237adc72afd1d142d8e0211b6e7983f852",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403164051/byg8xj2welb4xzdfg8el.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403164051/byg8xj2welb4xzdfg8el.png"
            },
            content: '<p>Выполняем выравнивание уровня почвы. Создаем искусственные возвышенности или углубления в соответствии с вашим ландшафт-дизайном.</p>'
        },
        {
            name: 'Корчевание пней',
            slug: 'stumps_removal',
            priority: 240,
            showInFooter: true,
            state: 'published',
            image: {
                public_id: "v6b5rebzcpodlqbhcekv",
                version: 1403166201,
                signature: "820eaa24ff7e0348f7e9fec6576c5caff5a15cee",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403166201/v6b5rebzcpodlqbhcekv.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403166201/v6b5rebzcpodlqbhcekv.png"
            },
            content: '<p>Выкорчевываем пни механизированным способом. Используем трактор-экскаватор или экскаватор в зависимости от объемов и местности. Цены на работы можно посмотреть в разделе <a href=\"../../services/specmashines-rent/\">аренды спецтехники</a> или позвонив нам по телефону +7 (499) 649-03-90.</p>'
        },

        {
            name: 'Очистка дна от ила',
            slug: 'sludge_cleaning',
            priority: 300,
            showInFooter: true,
            state: 'published',
            image: {
                public_id: "vedgywjezw5xnb90445l",
                version: 1403327885,
                signature: "bd815b82a48ce9f11c2fdb8a42968f2e2bb469d9",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403327885/vedgywjezw5xnb90445l.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403327885/vedgywjezw5xnb90445l.png"
            },
            content: '<p>В зависимости от размеров и глубины водоема, мы используем либо плавучий землесосный снаряд, либо экскаваторы.</p>'
        },
        {
            name: 'Очистка дна от мусора',
            slug: 'garbage_cleaning',
            priority: 310,
            showInFooter: true,
            state: 'published',
            image: {
                public_id: "j7ww9avll9si5o5knsio",
                version: 1403328040,
                signature: "5f8a168ab4318a814bd1b49e6cd433722fd5a962",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403328040/j7ww9avll9si5o5knsio.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403328040/j7ww9avll9si5o5knsio.png"
            },
            content: '<p>Убираем завалы, подводные камни. Поднимаем затопленную технику.</p>'
        },
        {
            name: 'Удаление растительности',
            slug: 'vegetation_removal',
            priority: 320,
            showInFooter: true,
            state: 'published',
            image: {
                public_id: "lxvffziobrvoohtjzr8m",
                version: 1403328192,
                signature: "b890a277477bc5badb6f146df5891c7d542fd4ff",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403328192/lxvffziobrvoohtjzr8m.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403328192/lxvffziobrvoohtjzr8m.png"
            },
            content: '<p>Удаляем плавающий и укоренившийся растительно-дерновой слой. Удаляем тростник, камыш, тину.</p>'
        },
        {
            name: 'Формирование берегового уреза',
            slug: 'shore-edge_development',
            priority: 330,
            showInFooter: true,
            state: 'published',
            image: {
                public_id: "edeedwps872q3woqwvqs",
                version: 1403328618,
                signature: "536cacea27d8e1348755edf4bc4f4ed7ddf1c7a0",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403328618/edeedwps872q3woqwvqs.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403328618/edeedwps872q3woqwvqs.png"
            },
            content: '<p>Выполняем работы по расчистке, укреплению, изменению формы берегов водоемов. Создаем пологие песчаные зоны для купания.</p>'
        },

        {
            name: 'Вывоз строительного мусора',
            slug: 'building-garbage_disposal',
            priority: 400,
            showInFooter: true,
            state: 'published',
            image: {
                public_id: "m94xfx6w3wz0gimgbszy",
                version: 1403328846,
                signature: "9dafc1841f12c514e222d3fd9716a1cf79b122cc",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403328846/m94xfx6w3wz0gimgbszy.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403328846/m94xfx6w3wz0gimgbszy.png"
            },
            content: '<p>Наша компания имеет большой практический опыт. Мы вывозим и утилизируем отходы после сноса зданий, реконструкций и иных строительных работ. Мы имеем доступ к полигонам для разгрузки мусора.</p>'
        },
        {
            name: 'Вывоз крупногабаритного мусора',
            slug: 'huge-item-garbage_disposal',
            priority: 410,
            showInFooter: true,
            state: 'published',
            image: {
                public_id: "oqretmyqt9x0gbbrowre",
                version: 1403329046,
                signature: "84f6bb0cb4722ba3efd4f9001ea8e60ea2dd9bd1",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403329046/oqretmyqt9x0gbbrowre.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403329046/oqretmyqt9x0gbbrowre.png"
            },
            content: '<p>Выполняем все виды работ: извлечение, погрузка, вывоз, утилизация.</p>'
        },

        {
            name: 'Снос строений',
            slug: 'buildings-destruct',
            priority: 500,
            state: 'published',
            image: {
                public_id: "vt0jkjbslxexc1z3qfcx",
                version: 1403329475,
                signature: "600d1b16ed0d43ab252016273d86de63f870c7f6",
                width: 540,
                height: 300,
                format: "png",
                resource_type: "image",
                url: "http://res.cloudinary.com/dkahagmzc/image/upload/v1403329475/vt0jkjbslxexc1z3qfcx.png",
                secure_url: "https://res.cloudinary.com/dkahagmzc/image/upload/v1403329475/vt0jkjbslxexc1z3qfcx.png"
            },
            content: '<p>Демонтируем механическим способом невысокие (до трех этажей) строения. Вывозим образующиеся отходы. Разравниваем поверхность.</p>'
        }
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