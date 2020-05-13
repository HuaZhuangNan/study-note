<%@ page import="com.Bean.Circle" %><%--
  Created by IntelliJ IDEA.
  User: 23822
  Date: 2019/4/10
  Time: 11:13
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>信息页面</title>
</head>
<body>
    <% Circle c = (Circle) (request.getAttribute("circle")); %>
    <p>您输入的圆半径： <%=c.getRadius()%> 坐标X： <%=c.getX()%> 坐标Y：<%=c.getY()%> 颜色： <%=c.getColor()%> 填充状态： <%=c.getIsfill()%></p>
</body>
</html>
