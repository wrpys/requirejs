<%@ page language="java" import="com.wrpys.ssm.common.Config" %>
<%
    String contextPath = request.getContextPath();
    Config c = new Config();
    if (c.getDebug()) {
        contextPath += "/src";
    } else {
        contextPath += "/build";
    }
    System.out.println("basePath=" + contextPath);
%>
<script type="text/javascript">
    var contextPath = "<%=contextPath%>";
</script>
<%--data-main="<%=request.getContextPath()%>/src/js/app"--%>
<script src="<%=contextPath%>/js/lib/require.js"></script>
<script src="<%=contextPath%>/js/require.config.js"></script>