/**
 * Created by Administrator on 2017/8/9.
 */
define(['jquery'], function ($) {
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
           // 'text!' + contextPath + '/src/js/user.html!strip'只要body
           require(['text!' + contextPath + '/src/js/user.html!strip'], function (userHtml) {
              $("#userInfo").html(userHtml)
           });
       }
   }
});