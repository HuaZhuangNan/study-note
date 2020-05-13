package com.bean;

// 用户数据

import com.data.UserData;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// 工具等

public class UserSean {
    // 构造 表单处理
    public UserSean(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String username,password,url,info;
        int err;
        // 表单处理
        request.setCharacterEncoding("utf-8");
        username = request.getParameter("name");
        password  = request.getParameter("pwd");
        if( username==null || "".equals(username) || password==null || "".equals(password) )
            info = "表单错误，为空！";
        else {// 表单判断
            UserData data = new UserData(username, password);
            err = data.testUser();
            //            // 是否含有错误
            switch (err) {
                case 0:
                    info = username;// ok
                    break;
                case 1:
                    info = "用户不存在！";
                    break;
                case 2:
                    info = "密码错误！";
                    break;
                case 3:
                default:
                    info = "请刷新一下！"; // 后台出错
            }

        }

        if(info.equals(username)) url ="wecome.jsp?user=";
        else url = "index.jsp?err=";
        info = url + java.net.URLEncoder.encode(info, "UTF-8");
        // 返回
        response.setIntHeader("Status Code",200);
        response.sendRedirect(info);
    }

}
