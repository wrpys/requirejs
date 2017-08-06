/**
 * Created by wrp on 2017/1/14.
 */
var contextPath = window.location.protocol+"//"+window.location.host+"/SSM/";
var _common = "common/";
require.config({
    baseUrl: contextPath + _common,
    paths: {
        jquery: 'jquery/jquery-1.9.1.min',
        domReady: 'requirejs/domReady',
        underscore: 'underscore/1.8.3/underscore',
        json: 'json/json2-min',
        bootstrap: 'bootstrap/js/bootstrap.min',
        bootstrapTable: 'bootstrap-table/bootstrap-table.min',
        bootstrapTableZhCN: 'bootstrap-table/bootstrap-table-zh-CN.min',
        jqueryValidation: 'jquery-validation/jquery.validate',
        jqueryValidationCN: 'jquery-validation/messages_cn',
        message: 'bootstrap/ext/message',
        common: 'utils/common',
        select2: 'select2/select2.full.min',
        select2Cn: 'select2/i18n/zh-CN',
        zTree: 'zTree_v3/js/jquery.ztree.all.min',
        bootstrapDatetimepicker: 'bootstrap-datetimepicker/js/bootstrap-datetimepicker.min',
        bootstrapDatetimepickerCn: 'bootstrap-datetimepicker/js/bootstrap-datetimepicker.zh-CN'
    },
    map:{
        "*":{
            "css": "requirejs/css.min"
        }
    },
    shim: {
        bootstrap: { deps: ["jquery", "css!" + contextPath + _common + "bootstrap/css/bootstrap.min.css"] },
        message: { deps: ["bootstrap"] },
        bootstrapTable: { deps: ["bootstrap", "css!" + contextPath + _common + "bootstrap-table/bootstrap-table.min.css"] },
        bootstrapTableZhCN: { deps: ["bootstrapTable"] },
        jqueryValidation: { deps: ['jquery'] },
        jqueryValidationCN: { deps: ['jqueryValidation'] },
        common: { deps: ['jquery'] },
        select2: { deps: ['jquery', 'css!' + contextPath + _common + 'select2/select2.min.css'] },
        select2Cn: { deps: ['select2'] },
        zTree: { deps: ['jquery', 'css!' + contextPath + _common + 'zTree_v3/css/zTreeStyle/zTreeStyle.css'] },
        bootstrapDatetimepicker: { deps: ['bootstrap', "css!" + contextPath + _common + "bootstrap-datetimepicker/css/bootstrap-datetimepicker.min" ] },
        bootstrapDatetimepickerCn: { deps: ['bootstrapDatetimepicker'] }
    }
});