package com.example.message;

class Msg {
    static final int TYPE_ERCEIVED = 0;  // 下标分辨左右消息
    static final int TYPE_SENT = 1;
    private String content;  // 消息内容
    private int type;  // 左边还是右边消息
    Msg(String content, int type){  // 初始化
        this.content = content;
        this.type = type;
    }
    String getContent(){
        return content;
    }
    int getType(){
        return  type;
    }

}
