package com.servlet;

// 登录
import com.bean.UserSean;


// 服务
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@WebServlet(name = "Login")
public class Login extends HttpServlet {
    private String username,password,time;
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        username = request.getParameter("name");
        password  = request.getParameter("pwd");
        time = request.getParameter("time");
        if( username==null || "".equals(username) || password==null || "".equals(password) || time==null || "".equals(time)){
            response.sendRedirect("index.jsp?err="+java.net.URLEncoder.encode("表单错误，为空！","UTF-8"));
        }else{
            UserSean c = new UserSean(username,password,time);
        }

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
