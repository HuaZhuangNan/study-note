package com.bean;

public class VoteuserBean {
    private int id;
    private String votename,poll;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getVotename() {
        return votename;
    }

    public void setVotename(String votename) {
        this.votename = votename;
    }

    public String getPoll() {
        return poll;
    }

    public void setPoll(String poll) {
        this.poll = poll;
    }
}
