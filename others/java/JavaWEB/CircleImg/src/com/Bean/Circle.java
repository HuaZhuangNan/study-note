package com.Bean;

import java.awt.*;
import java.awt.image.BufferedImage;

public class Circle {
    private int x,y,radius;
    private String color,isfill;
    public BufferedImage getBimg(){
        // 画布
        BufferedImage bimg = new BufferedImage(2*(radius+x),2*(radius+y),BufferedImage.TYPE_INT_RGB);
        //获取Graphics对象 画笔
        Graphics g = bimg.getGraphics();
        // 颜色转换
        Color colors = Color.decode(color);
        // 背景颜色通过画笔填充
        g.setColor(colors);
        if("true".equals(isfill)) g.fillOval(x-radius,y-radius,2*radius,2*radius);
        else g.drawOval(x-radius,y-radius,2*radius,2*radius);
        return bimg;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    public int getRadius() {
        return radius;
    }

    public void setRadius(int radius) {
        this.radius = radius;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getIsfill() {
        return isfill;
    }

    public void setIsfill(String isfill) {
        this.isfill = isfill;
    }
}
