var express = require('express');
var router = express.Router();
var products = [
    {
        id: 1,
        link: 'https://www.tangeche.com/detail.html?modelCode=8200-n&brandCode=brand-108&seriesCode=series-1216',
        url: 'https://img.souche.com/973052b4f0c2ba37111fee2d418174a5.jpg',
        image: './images/product-image-01.jpg',
        title: 'MINI',
        subTitle: '2016款 MINI CLUBMAN 1.5T COOPER 极客版'
    },
    {
        id: 2,
        link: 'https://www.tangeche.com/detail.html?modelCode=12553-n&brandCode=brand-53&seriesCode=series-2242',
        url: 'https://img.souche.com/3828f5e470069a6d7d2065faac8ae01f.jpg',
        image: './images/product-image-02.jpg',
        title: '福克斯',
        subTitle: '2017款 福克斯 两厢 1.6L 自动舒适型智行版'
    },
    {
        id: 3,
        link: 'https://www.tangeche.com/detail.html?modelCode=52942&brandCode=brand-30&seriesCode=series-609',
        url: 'https://f.souche.com/110f51a600cad92dd62d7246b44a31b6.jpg',
        image: './images/product-image-03.jpg',
        title: '君威',
        subTitle: '2015款 君威 1.6T 领先技术型'
    },
    {
        id: 4,
        link: 'https://www.tangeche.com/detail.html?modelCode=14134-n&brandCode=brand-30&seriesCode=series-1899',
        url: 'https://f.souche.com/566a42eb19b5f304b5aa867c96e8e901.jpg',
        image: './images/product-image-04.jpg',
        title: '英朗',
        subTitle: '2017款 英朗 15N 自动精英型'
    },
    {
        id: 5,
        link: 'https://www.tangeche.com/detail.html?modelCode=15066-n&brandCode=brand-30&seriesCode=series-2643',
        url: 'https://f.souche.com/8c395b0a4feb1668ab90e03cf0dc1e75.jpg',
        image: './images/product-image-05.jpg',
        title: '昂科拉',
        subTitle: '2017款 昂科拉 18T 自动两驱都市领先型'
    },
    {
        id: 6,
        link: 'https://www.tangeche.com/detail.html?modelCode=15077-n&brandCode=brand-121&seriesCode=series-184',
        url: 'https://f.souche.com/57c99af5d29afba6ef36e61ae261160b.jpg',
        image: './images/product-image-06.jpg',
        title: '骊威',
        subTitle: '2015款 骊威 1.6XE CVT舒适版'
    },
    {
        id: 7,
        link: 'https://www.tangeche.com/detail.html?modelCode=11953-n&brandCode=brand-53&seriesCode=series-50098',
        url: 'https://f.souche.com/cded0b1c95962e0293746b7656cdb583.jpg',
        image: './images/product-image-07.jpg',
        title: '金牛座',
        subTitle: '2017款 金牛座 EcoBoost 325 V6旗舰型'
    },
    {
        id: 8,
        link: 'https://www.tangeche.com/detail.html?modelCode=1547451&brandCode=brand-158&seriesCode=series-2055-n',
        url: 'https://f.souche.com/6452e27b00c0dca181eaca35353fccd8.jpg',
        image: './images/product-image-08.jpg',
        title: '英菲尼迪ESQ',
        subTitle: '2014款 英菲尼迪ESQ 1.6L 率性版'
    },
    {
        id: 9,
        link: 'https://www.tangeche.com/detail.html?modelCode=12654-n&brandCode=brand-135&seriesCode=series-2843',
        url: 'https://f.souche.com/5f6a66bebc70aa2bbf6b6835e4c44302.jpg',
        image: './images/product-image-09.jpg',
        title: '野帝',
        subTitle: '2017款 野帝 280TSI DSG前行版'
    },
    {
        id: 10,
        link: 'https://www.tangeche.com/detail.html?brandCode=brand-27&seriesCode=series-564&modelCode=12788-n',
        url: 'https://f.souche.com/5d9e91694f2e6f941f422c351446005b.jpg',
        image: './images/product-image-10.jpg',
        title: '雅阁',
        subTitle: '2016款 雅阁 混动 2.0L 锐酷版'
    },
    {
        id: 11,
        link: 'https://www.tangeche.com/detail.html?brandCode=brand-135&seriesCode=series-156&modelCode=10988-n',
        url: 'https://f.souche.com/3391a9a813100ae27ba9ddbdc3202d55.jpg',
        image: './images/product-image-11.jpg',
        title: '明锐',
        subTitle: '2017款 明锐 1.6L 自动前行版'
    },
    {
        id: 12,
        link: 'https://www.tangeche.com/detail.html?modelCode=6712-n&brandCode=brand-29&seriesCode=series-23231',
        url: 'https://f.souche.com/37cb9e9e4a042b222be196c4fa2ee1a7.jpg',
        image: './images/product-image-12.jpg',
        title: '标致308S',
        subTitle: '2015款 标致308S 1.2T 自动劲驰版'
    },
    {
        id: 13,
        link: 'https://www.tangeche.com/detail.html?modelCode=12039-n&brandCode=brand-29&seriesCode=series-1382',
        url: 'https://f.souche.com/dfb0e0f94fafcf141b9c29d74f551ec3.jpg',
        image: './images/product-image-13.jpg',
        title: '标致2008',
        subTitle: '2015款 标致2008 1.6L 自动玩酷版'
    },
    {
        id: 14,
        link: 'https://www.tangeche.com/detail.html?modelCode=43248&brandCode=brand-29&seriesCode=series-1900',
        url: 'https://f.souche.com/10d8ac39d2ecb76446c4799af96f78bb.jpg',
        image: './images/product-image-14.jpg',
        title: '标致408',
        subTitle: '2014款 标致408 1.8L 自动豪华版'
    },
    {
        id: 15,
        link: 'https://www.tangeche.com/detail.html?modelCode=200371&brandCode=brand-29&seriesCode=series-2232',
        url: 'https://f.souche.com/e8d49b72d469cc5758b3829ec9d7ca52.jpg',
        image: './images/product-image-15.jpg',
        title: '标致508',
        subTitle: '2015款 标致508 1.6THP 自动致逸天窗版'
    },
    {
        id: 16,
        link: 'https://www.tangeche.com/detail.html?modelCode=200634&brandCode=brand-121&seriesCode=series-317',
        url: 'https://f.souche.com/49147e43abd2930a4b833778abd12fcc.jpg',
        image: './images/product-image-16.jpg',
        title: '天籁',
        subTitle: '2016款 天籁 2.0L XE时尚真皮版'
    }
];

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send(JSON.stringify(products));
});

module.exports = router;
