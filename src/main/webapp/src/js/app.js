/**
 * Created by wrp on 2017/8/6.
 */

require(['jquery', './app/api', 'modernizr', 'backbone', 'i18n!./nls/message', 'bootstrap',  'css!lib/css/bootstrap.min.css', 'css!lib/css/index.css'],
        function ($, api, modernizr, backbone, i18n) {
    console.log(backbone);
    console.log(modernizr);
    console.log(i18n);

    $("#user").after('<button class="btn btn-default">' + i18n.edit + '</button>');

    $("#user").click(function () {
        // api.getUser().then(function (user) {
        //     console.log(user)
        // });
        api.loadUser();
    });
});
