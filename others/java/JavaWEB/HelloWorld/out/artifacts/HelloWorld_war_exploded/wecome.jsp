<%@ page language="java"  pageEncoding="utf-8"%>
<%@ page contentType="text/html;charset=utf-8"%>
<%
    if(session.getAttribute("name") != null){  // 不可以直接转
        request.setCharacterEncoding("utf-8");
        String logout = request.getParameter("logout");
        if(logout !=null && !"".equals(logout) && "true".equals(logout)){
            // 注销跳转
            session.setAttribute("name",null);
            response.sendRedirect("index.jsp");
        }
    }else {
        // 非法访问
        response.sendRedirect("index.jsp");
    }
%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>欢迎你！</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>
    <h1><%=session.getAttribute("name")%>欢迎你！</h1>
    <a href="?logout=true" >注销</a>
</body>
</html>