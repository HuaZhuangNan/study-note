package main;

import java.io.*;

public class Main {
	public static void main(String[] args) {
		Specialist a= new Specialist("小沫",1000,"江西吉安","临床");
		a.print();
		NonSpecialist b= new NonSpecialist("小沫",1000,"江西吉安");
		b.print();
		Doctor c= new Doctor("小沫",1000,"江西吉安");
		c.print();
		NumberAddition d=new NumberAddition(1,2);
		System.out.println("两个int相加的结果为 "+d.add());
		TextConcatenation e= new TextConcatenation("1","2");
		System.out.println("两个字符串相连的结果为 "+e.add());
	}
}
