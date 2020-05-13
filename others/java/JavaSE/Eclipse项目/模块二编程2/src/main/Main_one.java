package main;

import java.io.*;
import java.util.Scanner;

public class Main_one {

	public static void main(String argv[])
	{
		//声明变量，整数n
		int n,i,c;
		System.out.println("请输入你要打印的行数！");
		Scanner N = new  Scanner(System.in);
		n = N.nextInt();
		N.close();//关闭输入流
		for(i=1;i<=n;i++)
		{
			for(i=1;i<=2*i-1;i++)
			System.out.print("*");
		}
		
		
	}
}
