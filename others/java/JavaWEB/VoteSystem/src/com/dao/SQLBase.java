package com.dao;

import java.sql.*;
import com.mysql.cj.jdbc.Driver;

public class SQLBase {
    private String library;
    // 声明链接
    private Connection con=null;
    private ResultSet rs=null;
    // 数据
    public SQLBase(String library) {
        this.library = library;
    }
    // 连接数据库
    private Connection linksql(){
        // 需要执行的数据库
        //activiti?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC
        String url = "jdbc:mysql://localhost:3306/"+library+ "?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";
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
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("sql-query-err");
        } finally {
            System.out.println("sql-link");
        }
        return con;
    }
    //  关闭连接
    public boolean colse(){
        if(rs !=null &&con!=null){
            // 关闭连接
            try {
                rs.close();
                con.close();
            } catch (SQLException e) {
                e.printStackTrace();
                return false;
            }
        }
        return true;
    }
    // 增删改
    private boolean zfg(String sql){
        //获取连接对象
        con = linksql();
        //创建类对象执行sql语句
        Statement statement = null;
        try {
            statement = con.createStatement();
            statement.executeUpdate(sql);
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }
    // 查询
    public ResultSet query(String sql)  {
        sql = "SELECT " + sql;
        //获取连接对象
        con = linksql();
        //创建类对象执行sql语句
        Statement statement = null;
        try {
            statement = con.createStatement();
            // 执行sql
            rs = statement.executeQuery(sql);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return rs;
    }
    // 添加
    public boolean insert(String sql){
        sql = "INSERT" + sql;
        return zfg(sql);
    }
    // 修改
    public boolean updata(String sql){
        sql = "UPDATE " + sql;
        return zfg(sql);
    }
    // 删除
    public boolean delete(String sql){
        sql = "DELETE " + sql;
        return zfg(sql);
    }
}
