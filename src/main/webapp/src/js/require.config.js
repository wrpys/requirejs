/**
 * Created by Administrator on 2017/8/12.
 */
var language = document.cookie.match(/language=([^;]+)/);
var locale = 'zh-cn';
if (language) {
    locale = language[1].split('_')[0];
}

requirejs.config({
    baseUrl:  typeof sourcePath  !== 'undefined' ? sourcePath + '/js' : './src/js',
    paths: {
        'jquery': 'lib/jquery',
        'bootstrap': './lib/bootstrap',
        'modernizr': './lib/modernizr',
        'backbone': './lib/backbone',
        'underscore': './lib/underscore',
        'text': './lib/require/text',
        'i18n': './lib/require/i18n'
    },
    shim: {
        'modernizr': {
            exports: 'Modernizr'
        },
        // 'bootstrap': ['jquery']
        'bootstrap': ['jquery']
    },
    map: {
        // 不同模块使用不同jquery
        // 'app/api': {
        //     'jquery': './lib/jquery'
        // },
        // 'app/api2': {
        //     'jquery': './lib/jquery2'
        // }
        '*': {
            'css': './lib/require/css'
        }
    },
    config: {
        i18n: {
            locale: typeof locale !== 'undefined' ? locale : 'zh'
        }
    },
    waitSeconds: 7,
    urlArgs: '_=' + new Date().getTime()
});
