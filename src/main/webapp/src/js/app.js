/**
 * Created by wrp on 2017/8/6.
 */
requirejs.config({
    baseUrl: contextPath + '/src/js'
});
require(['helper'], function (helper) {
    var str = helper.trim("    amd    ");
    console.log(str);
});
