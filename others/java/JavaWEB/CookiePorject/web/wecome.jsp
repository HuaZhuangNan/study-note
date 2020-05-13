<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%!
    String name,logout;
    Cookie cookies[];
%>

<%
    request.setCharacterEncoding("utf-8");
    name = request.getParameter("name");
    logout = request.getParameter("logout");
    cookies = request.getCookies();
%>
<html>
<head>
    <title>欢迎</title>
</head>
<body>
    <%
        if(name!=null && cookies!=null) {
            // 读取coookie
            for (int i=0;i<cookies.length;i++){
                if("name".equals(cookies[i].getName())){
                    out.write("<h2>");
                    ////userName=;
                    if (name.equals(java.net.URLDecoder.decode(cookies[i].getValue(),"UTF-8"))){
                        // 跳转到成功页面
                        out.print(name);
                        out.write("<a href='?logout="+name+"'>注销</a>");
                    } else out.print("非法访问1！"); //失败
                    out.write("</h2>");
                    break;
                }
            }
        }else {
            out.print("<h2>非法访问2！</h2>");
        }
        if(logout!=null){
            // cookie 清除
            if(cookies!=null) for (int i=0;i<cookies.length;i++){
                cookies[i].setMaxAge(0);
                response.addCookie(cookies[i]);
            }
            // 跳转到主页面
            response.sendRedirect("index.jsp");
        }
    %>
</body>
</html>
