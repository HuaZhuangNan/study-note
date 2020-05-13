package com.servlet;

// 登录

import com.bean.UserSean;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// 服务



@WebServlet(name = "Login")
public class Login extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //super.service(req, resp);
        String method = req.getMethod();
        System.out.println("login servlet");
        switch (method){
            case "POST": doPost(req,resp);break;
            case "GET" : doGet(req,resp);break;
            default: resp.setIntHeader("Status Code",404);
        }
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        System.out.println("POST");
        UserSean c = new UserSean(request,response); // 用户处理
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response){
        System.out.println("GET");
    }{

    }
}
