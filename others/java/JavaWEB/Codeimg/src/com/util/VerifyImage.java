package com.util;

import com.data.SessionCache;

import java.awt.*;
import java.awt.image.BufferedImage;
import javax.servlet.http.HttpServletRequest;

public class VerifyImage {
    private HttpServletRequest request;
    public VerifyImage(HttpServletRequest request){
        this.request = request;
    }
    public BufferedImage getBimg( int width,int height,int length){
        // 画布
        BufferedImage bimg = new BufferedImage(width,height,BufferedImage.TYPE_INT_RGB);
        //获取Graphics2D对象 画笔
        Graphics2D g = bimg.createGraphics();
        //开启文字抗锯齿
        g.setRenderingHint(RenderingHints.KEY_TEXT_ANTIALIASING, RenderingHints.VALUE_TEXT_ANTIALIAS_ON);
        // 背景颜色通过画笔填充
        g.setColor(randomColos()[0]);
        g.fillRect(0,0,width,height);
        //设置字体
        Font font = new Font("Algerian", Font.ITALIC, height/2);
        g.setFont(font);
        // 画笔颜色
        g.setColor(randomColos()[1]);
        // 直线

        // 数据
        g.drawString(randomStrs(length," "),width/(length*3),height/2+height/length);
        // 最少5防止字看不到 5 25 /5/  25 /5/  25 /5/ 25 5 = 125
//        g.drawString(randomStrs(1," "),(int) ((30-5)*Math.random())+5,25);
//        g.drawString(randomStrs(1," "),(int) ((60-35)*Math.random())+35,25);
//        g.drawString(randomStrs(1," "),(int) ((90-65)*Math.random())+65,25);
//        g.drawString(randomStrs(1," "),(int) ((115-95)*Math.random())+95,25);
        return bimg;
    }
    // 随机生成
    private String randomStrs(int length,String str){
        int ascll = (int) (Math.random()*length+1); // 0-length+1 = 1-length
        int r = ascll;
        StringBuilder code= new StringBuilder();
        // a-zA-Z 65-90 97-122
        // 0-9 48-57
        for (int i = 0; i< length; i++) {
            if(i==r-i){
                ascll = (int) ((122-97)*Math.random())+97;// A-Z 97-122
            }else if ( r*i %2 == 0) { // r*i %(r+i) == 0一定可以第一个大写
                ascll = (int) ((90-65)*Math.random())+65;// a-z 65-90
            } else {
                ascll = (int) ((57-48)*Math.random())+48;// 0-9 48-57
            }
            // 转换 ascll 码为 string
            code.append((char) ascll).append(str);
        }
        // 写入session 内存,保存20分钟 用于登录验证， 去除空格
        SessionCache   session  = new SessionCache(request);
        session.setSession("verifyconde",code.toString().trim().replaceAll("\\s+",""),60*20);
        return code.toString();
    }
    // 随机颜色
    private Color[] randomColos(){
        String[] bgColor = {"#FFBBFF","#FFF68F","#EEC591"},// 浅紫 浅黄 浅橙
        pencolor = {"#00CD66","#00BFFF","#CD0000"};  // 绿 蓝 红
        int random = (int) (Math.random()*3); // 0-2
        Color[] colors;
        colors = new Color[]{Color.decode(bgColor[random]),Color.decode(pencolor[random])};
        return colors;
    }
    // 测试
//    public static void main(String[] args) throws IOException {
//        VerifyImage p = new VerifyImage();
//        FileOutputStream fout = new FileOutputStream("D:/1.png");
//        ImageIO.write(p.getBimg(110,40,4),"png",fout);
//    }
}
