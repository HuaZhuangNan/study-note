package wxwmy.cn;

import java.io.*;

public class Main {
	public static void main(String args[]) {
		String name,sex;
		int age;
		System.out.println("请輸入你的姓名");
		name="小陌";
		sex="男";
		age=18;
		Tool info= new Tool(name, sex, age);//新建对象
		info.printInfo();//打印信息函数
	}
}
