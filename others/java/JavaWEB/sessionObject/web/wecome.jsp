<%@ page language="java"  pageEncoding="utf-8"%>
<%@ page contentType="text/html;charset=utf-8"%>

<%!
    String logout,sName,sTime;
%>
<%

    if(session.getAttribute("name") != null){  // 不可以直接转
        request.setCharacterEncoding("utf-8");
        logout = request.getParameter("logout");
        sName = (String) session.getAttribute("name");
        if(session.getAttribute("name") != null){
            sTime = (String) session.getAttribute("stime");
        }
//        sTime = (String) session.getAttribute("stime");
        if(logout !=null && !"".equals(logout) && "true".equals(logout) ){
            // 注销跳转session.setAttribute("name",null);
            session.invalidate(); //释放所有的数据
            // session.setMaxInactiveInterval(0); 通过设置时间为0释放所有的数据
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
    <h1><%=sName%>欢迎你！</h1>
    <h2>时间戳:<%=sTime%></h2>
    <a href="?logout=true" >注销</a>
</body>
</html>