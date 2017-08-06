/**
 * Created by wrp on 2017/1/14.
 */
require(["jquery", "domReady", "bootstrapTable", "bootstrapTableZhCN", "message", "common", "jqueryValidation", "jqueryValidationCN", "select2", "select2Cn", "zTree", "bootstrapDatetimepicker", "bootstrapDatetimepickerCn"],
    function (jquery, domReady, bootstrapTable, bootstrapTableZhCN, message, common, jqueryValidation, jqueryValidationCN, select2, select2Cn, zTree, bootstrapDatetimepicker, bootstrapDatetimepickerCn) {

    domReady(function () {

        girld.init();

    });

});

var girld = {
    init: function () {
        var columns = (function () {
            var cs = [];
            var checkboxField = {
                checkbox: true
            }
            cs.push(checkboxField);
            var userIdField = {
                field: 'userId',
                title: '用户ID'
            }
            cs.push(userIdField);
            var userNameField = {
                field: 'userName',
                title: '用户名',
                align: 'center'
            }
            cs.push(userNameField);
            var ageField = {
                field: 'age',
                title: '年龄'
            }
            cs.push(ageField);
            return cs;
        })();

        $("#table").bootstrapTable({
            url: contextPath + "/user/list",
            height: 700,
            striped: true,
            columns: columns,
            // detailView: true,//父子表
            pagination: true,
            sidePagination: 'server',
            pageNumber: 1,
            pageSize: 10,
            pageList: [2, 10, 25, 50, 100],
            showRefresh: true,
            clickToSelect: true,
            toolbar: "#toolbar",
            queryParamsType: '',
            queryParams: function (params) {
                // queryParamsType: 'limit',
                // params.pageNumber = params.offset / params.limit + 1;
                // params.pageSize = params.limit;
                // 构造搜索栏参数
                return params;
            },
            onCheck: function (row) {
                girld.handleBtnPower();
            },
            onUncheck: function (row) {
                girld.handleBtnPower();
            },
            onLoadSuccess: function (data) {
                // 数据加载成功后 进行toolbar按钮事件绑定
                girld.toolbarEvent();
                // 搜索栏构造及查询按钮事件绑定
                girld.searchForm();
            },
            responseHandler:function (res) {
                return {total:100, rows:res.rows}
            }
        });

    },
    searchForm: function () {
        var searchBtn = $("#search");
        if(!common.isBindEvent(searchBtn, "click")) {

            // select2 demo
            var data = [{ id: 0, text: 'enhancement' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }];
            $("#type").select2({
                data: data
            });

            // bootstrap-datetimepicker demo
            $('#datetimepicker').datetimepicker({
                // format: 'yyyy-mm-dd hh:ii'
                format: 'yyyy-mm-dd',
                language:  'zh-CN',
                weekStart: 1,
                todayBtn:  1,
                autoclose: 1,
                todayHighlight: 1,
                startView: 2,
                minView: 2,
                forceParse: 0
            });

            searchBtn.on("click", function () {
                var data = common.buildFormData($("#searchForm").serializeArray());

                // select2 demo
                var types = [];
                var typeObjs = $("#type").select2("data");
                $.each(typeObjs, function (i, n) {
                    types.push(n.id);
                });
                console.log(types);

                data.pageNumber = 1;
                var params = {
                    silent: true,
                    query: data
                }
                $('#table').bootstrapTable("refresh", params);
                return false;
            });
        }
    },
    toolbarEvent: function () {
        // 新增
        var addBtn = $("#add");
        if (!common.isBindEvent(addBtn, "click")) {
            addBtn.attr("disabled",false);
            addBtn.on("click", function () {
                var dialog = bsMsg.dialog({
                    title: "新增用户",
                    // url: contextPath + "/pages/edit_user.jsp",
                    content: $("#editForm"),
                    button: [{
                        text: '取消',
                        classs: ['btn-default', 'cancel'],
                        click: function(){
                            dialog.close();
                        }
                    },{
                        text: '确认',
                        classs: ['btn-primary', 'ok'],
                        click: function () {
                            var formObj = dialog.dialogObj.find('form');
                            var flag = formObj.valid();
                            if(flag) {
                                var data = common.buildFormData(formObj.serializeArray());
                                $.ajax({
                                    url : contextPath + "/user/add",
                                    // async : false,
                                    type : 'POST',
                                    dataType : "json",
                                    data : data,
                                    success : function(data) {
                                        if (data && data.flag){
                                            bsMsg.alert({title: '成功提示', message: '新增成功!'});
                                            $('#table').bootstrapTable("refresh");
                                            dialog.close();
                                        } else {
                                            bsMsg.alert({title: '错误提示', message: '新增失败!'});
                                        }
                                    }
                                });
                            }
                        }
                    }],
                    onReady: function (target, e) {
                        target.find('form').validate();
                    }
                })
            });
        }
        // 编辑
        var editBtn = $("#edit");
        if (!common.isBindEvent(editBtn, "click")) {
            editBtn.attr("disabled",true);
            editBtn.on("click", function () {
                var rows = $('#table').bootstrapTable("getSelections");
                if(rows.length != 1) {
                    bsMsg.alert({title: '错误提示', message: '请选择一条记录!'});
                } else {
                    var dialog = bsMsg.dialog({
                        title: "修改用户",
                        // url: contextPath + "/pages/edit_user.jsp",
                        content: $("#editForm"),
                        button: [{
                            text: '取消',
                            classs: ['btn-default', 'cancel'],
                            click: function(){
                                dialog.close();
                            }
                        },{
                            text: '确认',
                            classs: ['btn-primary', 'ok'],
                            click: function () {
                                var formObj = dialog.dialogObj.find('form');
                                var flag = formObj.valid();
                                if(flag) {
                                    var data = common.buildFormData(formObj.serializeArray());
                                    $.ajax({
                                        url : contextPath + "/user/update",
                                        // async : false,
                                        type : 'POST',
                                        dataType : "json",
                                        data : data,
                                        success : function(data) {
                                            if (data && data.flag){
                                                bsMsg.alert({title: '成功提示', message: '修改成功!'});
                                                $('#table').bootstrapTable("refresh");
                                                dialog.close();
                                            } else {
                                                bsMsg.alert({title: '错误提示', message: '修改失败!'});
                                            }
                                        }
                                    });
                                }
                            }
                        }],
                        onReady: function (target, e) {
                            var formObj = target.find('form');
                            common.setFormData(formObj, rows[0]);
                            formObj.validate();
                        }
                    })
                }
            });
        }
        // 删除
        var removeBtn = $("#remove");
        if (!common.isBindEvent(removeBtn, "click")) {
            removeBtn.attr("disabled",true);
            removeBtn.on("click", function () {
                var rows = $('#table').bootstrapTable("getSelections");
                if(rows.length == 0) {
                    bsMsg.alert({title: '错误提示', message: '至少选择一条记录!'});
                } else {
                    // 批量id封装成数组
                    var userIds = [];
                    $.each(rows, function(i, n){
                        userIds.push(n.userId);
                    });

                    bsMsg.confirm({
                        title: '错误提示',
                        message: '确认删除选中记录吗?'
                    }).on(function (e) {
                        if(!e) return ;
                        $.ajax({
                            url : contextPath + "/user/batchDeleteUser",
                            // async : false,
                            type : 'POST',
                            dataType : "json",
                            data : {userIds: userIds.join()},
                            success : function(data) {
                                if (data && data.flag){
                                    bsMsg.alert({title: '成功提示', message: '删除成功!'});
                                    $('#table').bootstrapTable("refresh");
                                } else {
                                    bsMsg.alert({title: '错误提示', message: '删除失败!'});
                                }
                            }
                        });
                    })
                }
            });
        }

        //zTree Demo
        var showTreeBtn = $("#showTree");
        if (!common.isBindEvent(showTreeBtn, "click")) {
            showTreeBtn.on("click",function () {
                var dialog = bsMsg.dialog({
                    title: "zTree Demo",
                    // url: contextPath + "/pages/edit_user.jsp",
                    content: $("#treeTarget"),
                    onReady: function (target, e) {

                        var setting = {};
                        var zNodes = [
                            {
                                name: "test1", open: true, children: [
                                {name: "test1_1"}, {name: "test1_2"}]
                            },
                            {
                                name: "test2", open: true, children: [
                                {name: "test2_1"}, {name: "test2_2"}]
                            }
                        ];
                        var zTreeObj = $.fn.zTree.init(target.find("ul.ztree"), setting, zNodes);

                    }
                })

            })

        }

    },
    // 按钮权限
    handleBtnPower: function () {
        var rows = $('#table').bootstrapTable("getSelections");
        $("#edit").attr("disabled",true);
        $("#remove").attr("disabled",true);
        if (rows.length == 1) {
            $("#edit").attr("disabled",false);
        }
        if (rows.length > 0) {
            $("#remove").attr("disabled",false);
        }
    }
}