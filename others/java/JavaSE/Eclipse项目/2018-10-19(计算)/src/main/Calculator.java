package main;

public class Calculator {
	private double number1,number2;
	private String str1,str2;
	Calculator(double number1,double number2){
		this.number1=number1;
		this.number2=number2;
	}
	Calculator(String str1,String str2){
		this.str1=str1;
		this.str2=str2;
	}
	//函数重载 :更据参数、函数类别不同来区分
	String add2(){
		return str1+str2;
	}
	double add(){
		return number1+number2;
	}
	double subtract(){
		return number1-number2;
	}
	double multiple(){
		return number1*number2;
	}
	double divide(){
		if(number2 != 0) {
			return number1/number2;
		}
		else {
			return -1;
		}
	}
	
}
