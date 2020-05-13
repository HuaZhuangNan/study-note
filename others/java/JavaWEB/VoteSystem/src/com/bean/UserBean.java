package com.bean;

public class UserBean {
    private int id;
    private String username,passworld;
    private boolean isvote;
    private long data;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassworld() {
        return passworld;
    }

    public void setPassworld(String passworld) {
        this.passworld = passworld;
    }

    public boolean isIsvote() {
        return isvote;
    }

    public void setIsvote(boolean isvote) {
        this.isvote = isvote;
    }

    public long getData() {
        return data;
    }

    public void setData(long data) {
        this.data = data;
    }
}
