<%--
  Created by IntelliJ IDEA.
  User: wrp
  Date: 2017/1/14
  Time: 11:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>bootstrap-table</title>
    <%@include file="default/inc.jsp" %>
    <style type="text/css">
        .main {
            width: 96%;
            margin-left: auto;
            margin-right: auto;
            padding-top: 10px;
        }
        form .error {
            color: red;
            margin-top: 2px;
        }
        label.form-label {
            margin-left: 10px;
        }
    </style>
</head>
<body>


    <!--表格-->
    <div class="main">
        <form id="searchForm" class="form-inline" role="form">
            <div class="form-group">
                <label class="form-label">用户ID:</label>
                <input type="text" class="form-control" name="userId">
            </div>
            <div class="form-group">
                <label class="form-label">用户名:</label>
                <input type="text" class="form-control" name="userName">
            </div>
            <div class="form-group">
                <label class="form-label">年龄:</label>
                <input type="text" class="form-control" name="age">
            </div>
            <div class="form-group">
                <label class="form-label">类别:</label>
                <select class="js-example-basic-multiple form-control" multiple="multiple" id="type"></select>
            </div>
            <div class="form-group">
                <label class="form-label">时间:</label>
                <input class="form-control" type="text" id="datetimepicker">
            </div>
            <button id="search" class="btn btn-default">
                <i class="glyphicon glyphicon-search"></i> 查询
            </button>
        </form>
        <div id="toolbar">
            <button id="add" class="btn btn-success" disabled>
                <i class="glyphicon glyphicon-plus"></i> 新增
            </button>
            <button id="edit" class="btn btn-info" disabled>
                <i class="glyphicon glyphicon-edit"></i> 修改
            </button>
            <button id="remove" class="btn btn-danger" disabled>
                <i class="glyphicon glyphicon-remove"></i> 删除
            </button>
            <button id="showTree" class="btn btn-default">
                zTree Demo
            </button>
        </div>
        <table id="table"></table>
    </div>

    <!--表单-->
    <div id="editForm" class="hide">
        <form  class="form-horizontal" role="form">
            <input type="hidden" name="userId">
            <div class="form-group">
                <label for="userName" class="col-sm-2 control-label">用户名:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="userName" id="userName" placeholder="请输入用户名" required>
                </div>
            </div>
            <div class="form-group">
                <label for="age" class="col-sm-2 control-label">年龄:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="age" id="age" placeholder="请输入年龄" required>
                </div>
            </div>
        </form>
    </div>

    <!--树插件-->
    <div id="treeTarget" class="hide">
        <ul id="treeDemo" class="ztree"></ul>
    </div>

<script type="text/javascript" src="<%=request.getContextPath()%>/pages/js/index.js" ></script>
</body>
</html>
