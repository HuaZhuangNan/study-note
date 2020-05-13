package com.util;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public  class JsonHandler {
    public static void JsonHandler(HttpServletResponse response, Object data) throws IOException {
        //将实体对象转换为JSON Object转换
        response.setContentType("application/json;charset=utf-8");//指定返回的格式为JSON格式
        response.setCharacterEncoding("UTF-8");//setContentType与setCharacterEncoding的顺序不能调换，否则还是无法解决中文乱码的问题

        String jsonStr ="{\"status\":\"200\",\"satausText\":\"OK\",\"data\":"+data+"}";
        PrintWriter out =null ;
        out =response.getWriter() ;

    }
}
