package com.servlet;

import com.data.SessionCache;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "LoginServlet")
public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8" ); // 设置编码
        String verifyCode = request.getParameter("code");
        // 获取 seeeion
        SessionCache session = new SessionCache(request);
        if(session.getSessionValue("verifycode")!=null){
            response.setIntHeader("Status Code",200);
            response.setContentType("text/plain");
            response.setCharacterEncoding("utf-8");
            response.getWriter().write("你的输入："+verifyCode+" 服务端："+session.getSessionValue("verifycode"));
        }else
            response.setIntHeader("Status Code",404);

    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
