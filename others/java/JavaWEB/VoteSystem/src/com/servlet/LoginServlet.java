package com.servlet;

import util.UserHandler;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet(name = "LoginServlet")
public class LoginServlet extends HttpServlet {
    private final int NO_ERR = 0,NULL_NAME=1,ERR_PASSWORLD=2, ERR_SERVER=3;
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("Login Post");
        UserHandler Handle = new UserHandler(request);
        int info = ERR_SERVER;
        try {
            info = Handle.login();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        // 返回
        response.setIntHeader("Status Code",200);
        // 是否登录成功
        if(NO_ERR==info){

        }
        response.sendRedirect(String.valueOf(info));
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response){
        // get请求直接404
        System.out.println("Login Get 404");
        response.setStatus(404);
    }

}
