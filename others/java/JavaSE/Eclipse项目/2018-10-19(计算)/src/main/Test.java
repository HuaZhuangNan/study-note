package main;


import java.util.Scanner;

public class Test {
	private double number1,number2,jg;
	private	int ff;
	private String str1,str2;
	Scanner N = new  Scanner(System.in);
	int js(){
		if(jg!=-1) {
			System.out.println("\t欢迎使用小陌计算器");
			System.out.println("请输入第一个数");
			number1 = N.nextInt();
		}
		System.out.println("请输入第二个数");
		number2 = N.nextInt();
		
		Calculator cal= new Calculator(number1,number2);//新建对象
		str1="123";
		str2="456";
		Calculator calstr= new Calculator(str1,str2);//新建对象
		System.out.println(calstr.add2());
		do {
			System.out.println("请输入你要选择的功能\n\t 1---两数相加\n\t 2---两数相减\n\t 3---两数相乘\n\t 4---两数相除");
			ff = N.nextInt();
			
			switch(ff) {
			case 1: jg=cal.add();
			break;
			case 2: jg=cal.subtract();
			break;
			case 3: jg=cal.multiple();
			break;
			case 4: jg=cal.divide();
			break;
			default:
				System.out.println("输入指令有误请重新输入!");ff=5;
			}
		}while(ff==5);
		
		
		if(ff == 4 && jg == -1){
			System.out.println("除数不能为0\n请重新输入!");
			js();
		}
		else{
			System.out.println("两个数的计算结果为："+jg);
			System.out.println("请选择而是否继续计算？ 1 退出 2 继续");
			ff = N.nextInt();
			if(ff==2){
				js();
			}else {
				System.out.println("谢谢你的使用!");
			}
		}
		N.close();//关闭输入流
		return 1;
		
	}
	
}
