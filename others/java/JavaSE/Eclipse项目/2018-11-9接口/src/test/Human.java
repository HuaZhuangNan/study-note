package test;

import java.io.*;

public class Human extends Animal implements A {
	public Human(String name,int age,int weight) {
		super(name,age,weight);
	}
	public void feed() {
		System.out.println(name+"��ʼ��ʳ");
	}
	public void move() {
		System.out.println(name+"ֱ������");
	}
	public void Burn() {
		System.out.println(name+"����");
	}
}
