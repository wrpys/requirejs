<%--
  Created by IntelliJ IDEA.
  User: wrp
  Date: 2017/8/6
  Time: 16:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>requirejs demo</title>
    <%--<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/src/css/bootstrap.min.css"/>--%>
    <%--<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/src/css/index.css"/>--%>
</head>
<body>

    <button class="btn btn-default" id="user">获取用户信息并打印</button>
    <p id="userInfo"></p>
<%@include file="src/inc.jsp"%>
<script src="<%=contextPath%>/js/app.js"></script>
</body>
</html>
