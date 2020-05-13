package com.data;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public class SessionCache {
    private HttpServletRequest request;
    public SessionCache(HttpServletRequest request){
        this.request = request;
    }
    public void setSession( String name, String value, int Time){
        HttpSession session = request.getSession();
        // 放到储存中
        session.setAttribute(name,value);
        session.setAttribute("startTime",session.getCreationTime()); // 返回创建的毫秒时间戳
        session.setMaxInactiveInterval(Time); //设置成 1 小时超时 60*60
    }
    public String getSessionValue(String name){
        String value=null;
        HttpSession session = request.getSession();
        // 获取数据
        if(session.getAttribute("verifyconde") != null){
            value = (String) session.getAttribute("verifyconde");
        }
        return value;
    }
}
