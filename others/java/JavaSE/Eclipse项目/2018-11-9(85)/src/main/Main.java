package main;



public class Main {
	public static void main(String[] args){
		Graphics rectangle = new Rectangle(5,10);//矩形,长方形
		Graphics triangle = new Triangle(5,10);//三角形
		Graphics trapezoid = new Trapezoid(5,6,10);//梯形
		System.out.println(rectangle);
		System.out.println(triangle);
		System.out.println(trapezoid);
	}
}
