<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%!
    String user;
%>
<%
    request.setCharacterEncoding("utf-8");
    user = request.getParameter("user");
    if(user!=null){
        out.print("<h5>"+user+"</h5>");
    }
%>
<html>
<head>
    <title>欢迎</title>
</head>
<body>
</body>
</html>
