package test;

public abstract class Animal {
	public String name;
	public  int age;
	public  int weight;
	protected Animal(String name,int age,int weight) {
		this.name=name;
		this.age = age;
		this.weight = weight;
	}
	public void feed() {};
	public void move() {};
}
