/**
 * Created by Administrator on 2017/8/9.
 */
// 'text!' + contextPath + '/src/js/user.html!strip'只要body
define(['jquery', 'text!./user.html!strip'], function ($, userHtml) {
    return {
       getUser: function () {
           var def = $.Deferred();
           require(['./app/user'], function (user) {
               def.resolve(user);
           });
           return def;
       },
       getUserByJsonp: function () {
           require(['跨域url'], function (user) {
               console.log(user);
           })
       },
       loadUser: function () {
           $("#userInfo").html(userHtml)
       }
   }
});