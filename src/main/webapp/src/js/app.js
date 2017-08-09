/**
 * Created by wrp on 2017/8/6.
 */
requirejs.config({
    baseUrl: contextPath + '/src/js',
    paths: {
        'jquery': 'lib/jquery',
        'bootstrap': './lib/bootstrap',
        'modernizr': './lib/modernizr',
        'backbone': './lib/backbone',
        'underscore': './lib/underscore',
        'text': './lib/require/text',
        'text': './lib/require/i18n'
    },
    shim: {
        'modernizr': {
            exports: 'Modernizr'
        },
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
    waitSeconds: 7,
    urlArgs: '_=' + new Date().getTime()
});
require(['jquery', './app/api', 'modernizr', 'backbone', 'css!' + contextPath + '/src/css/bootstrap.min.css', 'css!' + contextPath + '/src/css/index.css'],
        function ($, api, modernizr, backbone) {
    console.log(backbone);
    console.log(modernizr);
    $("#user").click(function () {
        // api.getUser().then(function (user) {
        //     console.log(user)
        // });
        api.loadUser();
    });
});
