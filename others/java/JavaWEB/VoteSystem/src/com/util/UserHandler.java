package com.util;

import com.dao.SQLBase;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserHandler {
    private HttpServletRequest request;
    private final int NO_ERR = 0,NULL_NAME=1,ERR_PASSWORLD=2, ERR_SERVER=3;
    public UserHandler(HttpServletRequest request) {
        this.request = request;
    }

    public int login() throws UnsupportedEncodingException, SQLException {
        int info = ERR_SERVER;
        // 表单处理
        request.setCharacterEncoding("utf-8");
        String username = request.getParameter("username");
        String password  = request.getParameter("password");
        SQLBase base = new SQLBase("javweb");
        ResultSet rs = base.query("username,password FROM user WHERE username='"+username+"'");
        // 先判断用户是否存在
        if(rs.next()){
            // 创建变量
            String passSql = rs.getString("password");
            if(passSql.equals(password)){
                info = NO_ERR; // 无错
            }else info = ERR_PASSWORLD; //密码错误
        }else  info = NULL_NAME; // 用户不存在
        return info;
    }
}
