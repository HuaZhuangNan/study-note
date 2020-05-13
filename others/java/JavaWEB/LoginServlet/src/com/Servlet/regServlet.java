package com.Servlet;

import com.Bean.Users;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

@WebServlet(name = "regServlet")
public class regServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        String name,password,email,birthday;
        name = request.getParameter("name");
        password = request.getParameter("password");
        email = request.getParameter("email");
        birthday = request.getParameter("birthday");
        Users user = new Users();
        user.setName(name);
        user.setPassword(password);
        user.setEmail(email);
        user.setBirthday(birthday);
        user.setCreateTime(new Date().toString());
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
