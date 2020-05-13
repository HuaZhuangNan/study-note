package com.servlet;

import com.Bean.Circle;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.OutputStream;

@WebServlet(name = "AcceptCircle")
public class AcceptCircle extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int x,y,radius;
        String color,isfill;
        request.setCharacterEncoding("utf-8");
        x = Integer.parseInt(request.getParameter("x"));
        y = Integer.parseInt(request.getParameter("y"));
        radius = Integer.parseInt(request.getParameter("radius"));
        color = request.getParameter("color");
        isfill = request.getParameter("isfill");
        // 创建对象并赋值数据
        Circle circle = new Circle();
        circle.setX(x);
        circle.setY(y);
        circle.setRadius(radius);
        circle.setColor(color);
        circle.setIsfill(isfill);
        // 挂在一个对象上去
        request.setAttribute("circle",circle);
        // 带到jsp页面去
        request.getRequestDispatcher("view.jsp").forward(request,response);
//        //  构建图片
//        BufferedImage img = circle.getBimg();
//        // 1. 首先设置
//        response.setIntHeader("Status Code",200);
//        response.setContentType("image/apng");
//        // 2. 获取返回给浏览器客户端的响应流
//        OutputStream output = response.getOutputStream();
//        // 3. 输出图片到浏览器
//        ImageIO.write(img, "png", output);
//        //关闭流，释放资源
//        output.close();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}
