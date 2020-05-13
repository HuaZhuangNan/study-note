package main;

/*
 * 要求流程：
 * 1，先输入运算符+、-、*、/
 * 2，再输入2个数计算
 * 3，打印结果
 * 4，除非输入了“！”，否者 不停止
 */

import java.io.*;
import java.util.Scanner;


public class Main {

	public static void main(String arg[])
	{
		//声明变量存运算符，数字一和二,结果
		char fh = ' ';
		double nub1 = 0 , nub2 = 0, rec = 0;
		Scanner sc = new  Scanner(System.in);
		do
		{
			do
			{
				System.out.println("请输入运算符！");
				String fhst = sc.next();//输入值放入字符串
				fh =fhst.charAt(0);//取出字符串中第一个字符
				if(fh != '+' && fh != '-' && fh != '*' && fh != '/' )
					System.out.print("运算符输入有误,");
			}
			while( fh != '+' && fh != '-' && fh != '*' && fh != '/' );
			
			System.out.println("请输入第一个数字！");
			nub1 = sc.nextDouble();
			
			do
			{
				System.out.println("请输入第二个数字！");
				nub2 = sc.nextDouble();
				if(nub2==0)
					System.out.print("第二个数字不能为零,");
			}
			while(nub2 == 0);
			switch(fh)
			{
			case '+':rec = nub1+nub2;
				break;
			case '-':rec = nub1-nub2;
				break;
			case '*':rec = nub1*nub2;
				break;
			case '/':rec = nub1/nub2;
				break;
//			default :
//				System.out.println("运算符输入有误！");
//				fh=0;
			}
			System.out.println(nub1+" "+fh+" "+nub2+"计算的结果为"+rec);
			System.out.println("请选择是否继续！输入\"!\" 退出 ; 输入任意字符继续");
			String fhst = sc.next();
			fh =fhst.charAt(0);
		}
		while( fh != '!');
		sc.close();//关闭输入流
		System.out.println("谢谢你的使用！");
	}
}
