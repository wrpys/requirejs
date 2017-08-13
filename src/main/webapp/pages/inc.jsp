<%@ page language="java" import="com.wrpys.ssm.common.Config" %>
<%
    String contextPath = request.getContextPath();
    String sourcePath = contextPath;
    Config c = new Config();
    if (c.getDebug()) {
        sourcePath += "/src";
    } else {
        sourcePath += "/build";
    }
%>
<script type="text/javascript">
    var contextPath = "<%=contextPath%>";
    var sourcePath = "<%=sourcePath%>";
</script>
<%--data-main="<%=request.getContextPath()%>/src/js/app"--%>
<script src="<%=sourcePath%>/js/lib/require.js"></script>
<script src="<%=sourcePath%>/js/require.config.js"></script>