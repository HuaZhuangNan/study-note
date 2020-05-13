package test;

import java.io.*;

public class Human extends Animal implements A {
	public Human(String name,int age,int weight) {
		super(name,age,weight);
	}
	public void feed() {
		System.out.println(name+"开始进食");
	}
	public void move() {
		System.out.println(name+"直立行走");
	}
	public void Burn() {
		System.out.println(name+"哺乳");
	}
}
