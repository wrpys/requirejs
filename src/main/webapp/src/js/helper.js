/**
 * Created by wrp on 2017/8/6.
 */
define('helper', ['jquery'], function ($) {
    console.log($)
    return {
        trim: function (str) {
            return $.trim(str);
        }
    };
});