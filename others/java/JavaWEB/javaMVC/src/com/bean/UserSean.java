package com.bean;

// 用户数据
import com.data.UserData;

// 工具等
import java.util.Date;

public class UserSean {
    private String username,password;
    private Date createTime,lasetAccessTime;
    private int level;

    public UserSean(String username,String password,String time) {
        this.username = username;
        this.password = password;
        init(time);
    }
    // 初始化
    private void  init(String time){
        // 表单判断
        testForm();
        // 时间计算
        Date d = new Date();
        // 开始时间
        createTime  = d;
        // 结束时间
        lasetAccessTime = new Date(d.getTime()+countTime(time));
    }
    private String testForm(){
        String info;
        // 获取数据 UserData.UserPassword;
        for (int i=0;i<UserData.UserName.length;i++){
            if(UserData.UserName[i].equals(this.username)){

            }
        }
        return info;
    }
    // 计算时间函数
    private int countTime(String time){
        if(time==null || "".equals(time)){
            level =  0;
        }else switch(time){ // 过期时间
            case "day": level=(24*60*60);
                break;
            case "week": level=(7*24*60*60);
                break;
            case "month": level=(30*24*60*60);
                break;
            case "no":
            default: level=0;
        }
        return level;
    }




    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getLasetAccessTime() {
        return lasetAccessTime;
    }

    public void setLasetAccessTime(Date lasetAccessTime) {
        this.lasetAccessTime = lasetAccessTime;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }


}
