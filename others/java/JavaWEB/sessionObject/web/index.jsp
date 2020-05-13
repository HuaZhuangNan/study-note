<%@ page language="java"  pageEncoding="utf-8"%>
<%@ page contentType="text/html;charset=utf-8"%>
<%!
  int a = 1;
%>
<%
  if(session.isNew()){
    a++;
  }
  if(session.getAttribute("name") != null){  // 登陆了
    response.sendRedirect("login.jsp"); // 中转
  }
%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <title>登陆页面</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>
当前访问量：<%=a%>
<form action="login.jsp" method="post">
  <label>姓名：
    <input  name="user" id="user" type="text"  title="姓名" autocomplete="off" placeholder="请输入用户名">
  </label>
  <label>密码：
    <input name="pwd" id="pwd" type="password" title="密码" autocomplete="off"  placeholder="请输入密码" >
  </label>
  <button id="sum" type="submit" >提交</button>
  <button id="res" type="reset" >重置</button>
</form>
<p id="info"></p>
</body>
</html>
