package com.module;

public class Animal {
    private String name;
    private int age;

    public Animal(String n,int a){
        this.name = n;
        this.age  = a;
    }
    public void eat(){
        System.out.println(this.age+"岁的"+this.name+"开始进食！");
    }

}
