<%@ page import="com.sun.org.apache.xml.internal.security.Init" %>
<%@ page language="java" pageEncoding="utf-8"%>
<%!
    String name,pwd,time;
    Cookie cookies[],cookie_name;
    int times;
%>

<%
    request.setCharacterEncoding("utf-8");
    name = request.getParameter("name");
    pwd  = request.getParameter("pwd");
    time = request.getParameter("time");
    cookies = request.getCookies();
    if( name==null || "".equals(name) || pwd==null || "".equals(pwd) || time==null || "".equals(time)){
        response.sendRedirect("index.jsp?err="+java.net.URLEncoder.encode("表单错误，为空！","UTF-8"));
    }else if(cookies!=null){  // 判断是否已经登录
        // 读取coookie
        for (int i=0;i<cookies.length;i++){
            if("name".equals(cookies[i].getName())){
                if ("哈哈".equals(cookies[i].getValue()))
                    // 跳转到成功页面
                    response.sendRedirect("wecome.jsp?name="+java.net.URLEncoder.encode(cookies[i].getValue(),"UTF-8"));
                else
                    // 失败
                    response.sendRedirect("index.jsp?err="+java.net.URLEncoder.encode("cookie中用户不存在！","UTF-8"));
                break;
            }else {
                if("哈哈".equals(name) && "123".equals(pwd) ){  //账号密码正确 ，时间不为空
                    name=java.net.URLEncoder.encode(name,"UTF-8");
                    cookie_name = new Cookie("name",name);  // 创建cookie数据对象
                    switch(time){ // 过期时间
                        case "day": times=(24*60*60);
                            break;
                        case "week": times=(7*24*60*60);
                            break;
                        case "month": times=(30*24*60*60);
                            break;
                        case "no":
                        default: times=0;
                    }
                    //  cookie设置
                    cookie_name.setMaxAge(times);
                    // 添加cookie
                    response.addCookie(cookie_name);
                    // 跳转到成功页面
                    response.sendRedirect("wecome.jsp?name="+name);
                    break;
                }else {
                    // 错误
                    response.sendRedirect("index.jsp?err="+java.net.URLEncoder.encode("用户名或者密码错误！","UTF-8"));
                }
            }
        }
    }else {
        if("哈哈".equals(name) && "123".equals(pwd) ){  //账号密码正确 ，时间不为空
            cookie_name = new Cookie("name",name);  // 创建cookie数据对象
            switch(time){ // 过期时间
                case "day": times=(24*60*60);
                    break;
                case "week": times=(7*24*60*60);
                    break;
                case "month": times=(30*24*60*60);
                    break;
                case "no":
                default: times=0;
            }
            //  cookie设置
            cookie_name.setMaxAge(times);
            // 添加cookie
            response.addCookie(cookie_name);
            // 跳转到成功页面
            response.sendRedirect("wecome.jsp?name="+name);
        }else {
            // 错误
            response.sendRedirect("index.jsp?err=name or pwd ");
        }

    }
%>