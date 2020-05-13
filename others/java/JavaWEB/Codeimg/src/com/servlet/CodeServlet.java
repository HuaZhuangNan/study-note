package com.servlet;

import com.util.VerifyImage;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.OutputStream;

@WebServlet(name = "CodeServlet")
public class CodeServlet extends HttpServlet {
//    @Override
//    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException,IOException {
//        //super.service(req, resp);
//        String method = req.getMethod();
//        switch (method){
//            case "POST": doPost(req,resp);break;
//            case "GET" : doGet(req,resp);break;
//            default: resp.setIntHeader("Status Code",404);
//        }
//    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException,IOException {
        doGet(request, response);
    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException,IOException {
        request.setCharacterEncoding("utf-8");
        String codetime = request.getParameter("time");
        String codewidth = request.getParameter("width");
        String codeheight = request.getParameter("height");
        String codelength = request.getParameter("length");
        if(codewidth==null) codewidth="120";
        if(codeheight==null) codeheight="38";
        if(codelength==null) codelength="4";
//        System.out.println(time.length());
        if("".equals(codetime)){
            response.setIntHeader("Status Code",404);
        }else {
            VerifyImage codeimg = new VerifyImage(request);
            BufferedImage img = codeimg.getBimg(Integer.parseInt(codewidth.trim()),Integer.parseInt(codeheight.trim()),Integer.parseInt(codelength.trim()));
            //1.首先设置浏览器的缓存机制，设置为不缓存图片
            response.addIntHeader("Expires", -1);
            response.setHeader("Control-Cache", "no-cache");
            response.setHeader("Program", "no-cache");
            response.setIntHeader("Status Code",200);
            response.setContentType("image/apng");
            // 2. 获取返回给浏览器客户端的响应流
            OutputStream output = response.getOutputStream();
            // 3.输出图片到浏览器
            ImageIO.write(img, "png", output);
            //关闭流，释放资源
            output.close();
        }
    }
}
