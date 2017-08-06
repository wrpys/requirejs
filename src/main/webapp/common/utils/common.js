/**
 * Created by wrp on 2017/1/16.
 */
(function ($) {

    window.common = function () {

        // 将jquery serializeArray的值转为对象
        var buildFormData = function(fields) {
            var formData = {};
            $.each(fields, function(i, field){
                formData[field.name] = field.value;
            });
            return formData;
        }

        // 将根据对象的key设置对应的表单元素
        var setFormData = function (formObj, data) {
            for (key in data) {
                formObj.find("input[name='" + key + "']").val(data[key]);
            }
        }

        // 判断是否绑定了eventType[click]事件
        var isBindEvent = function (obj, eventType) {
            var objEvt = $._data(obj[0], "events");
            if (objEvt && objEvt[eventType]) {
                return true;
            } else {
                return false;
            }
        }

        return {
            buildFormData : buildFormData,
            setFormData : setFormData,
            isBindEvent : isBindEvent
        }

    }()

})(jQuery)