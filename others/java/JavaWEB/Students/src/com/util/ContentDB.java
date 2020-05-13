package com.util;

import java.sql.*;
import com.mysql.cj.jdbc.Driver;
// 用户数据
public class ContentDB {
    private String username,password;
    // 数据
    ContentDB(String username,String password) {
        this.username =username;
        this.password = password;
    }
    public int testUser(){
        String sql = "SELECT username,password FROM user WHERE username='"+username+"'";
        return linksql(sql);
    }
    // 连接数据库
    private int linksql(String sql){
        int err=3; // 默认链接出错
        // 声明链接
        Connection con;
        // 需要执行的数据库
        //activiti?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC
        String url = "jdbc:mysql://localhost:3306/javaweb"+
                "?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";
        // 配置用户名，密码
        String user = "root";
        String pass = "rootygj";
        // 加载驱动程序
        try{
            // 导入驱动
            Driver driver = new Driver();
//            Class.forName("com.mysql.jdbc.Driver");
            // 链接数据库
            con = DriverManager.getConnection(url,user,pass);
            if(!con.isClosed())
                System.out.println("sql-link-ok");
            //创建类对象执行sql语句
            Statement statement = con.createStatement();
            // 执行sql
            ResultSet rs = statement.executeQuery(sql);
            // 先判断用户是否纯在
            if(rs.next()){
                // 创建变量
                String passSql = rs.getString("password");
                if(passSql.equals(password)){
                    err = 0; // 无错
                }else err =2; //密码错误
            }else  err = 1; // 用户不存在
            // 关闭连接
            rs.close();
            con.close();
//            ResultSet rs = statement.executeQuery("SELECT "+name+"FORM user");
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("sql-query-err");
        } finally {
            System.out.println("sql-link");
        }
        return err;
    }

}
