
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%!
  String err;
%>
<%
  request.setCharacterEncoding("utf-8");
  err = request.getParameter("err");
  if(err!=null){
    out.print("<h5>"+err+"</h5>");
  }
%>
<html>
<head>
  <title>主页面</title>
</head>
<body>
<form action="login" method="post">
  <label>用户名：
    <input name="name" type="text">
  </label>
  <label>密码：
    <input name="pwd" type="password">
  </label>
  <button type="submit">登录</button>
</form>
</body>
</html>
