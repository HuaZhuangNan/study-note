package main;

import java.io.*;

public class Main {
	public static void main(String[] args) {
		Specialist a= new Specialist("Сĭ",1000,"��������","�ٴ�");
		a.print();
		NonSpecialist b= new NonSpecialist("Сĭ",1000,"��������");
		b.print();
		Doctor c= new Doctor("Сĭ",1000,"��������");
		c.print();
		NumberAddition d=new NumberAddition(1,2);
		System.out.println("����int��ӵĽ��Ϊ "+d.add());
		TextConcatenation e= new TextConcatenation("1","2");
		System.out.println("�����ַ��������Ľ��Ϊ "+e.add());
	}
}
