package main;

import java.io.*;
import java.util.Scanner;

public class Main_one {

	public static void main(String argv[])
	{
		//声明变量 月份m,人数p,价格jg,折扣zk;
		int m = 0,p=0,jg=398;
		double zk=1;
		do{
			System.out.println("请输入月份数字！");
			Scanner M = new  Scanner(System.in);
			m = M.nextInt();
			M.close();//关闭输入流
			System.out.println("请输入人数！");
			Scanner P = new  Scanner(System.in);
			p = P.nextInt();
			P.close();//关闭输入流
			if(m > 0 && m <= 12 && p>=0 && p<=1000 )
			{	
				if(m==4 || m==5 || m==7 || m==8 ||m==10) 
				{
					if(p>20)
					  zk=0.8;
					System.out.println("你们的票价为每人"+(float)(jg*zk)+"元");
				}
					
				else
				{
					if(p>20)
							zk=0.7;
					else
							zk=0.8;
					System.out.println("你们的票价为每人"+(float)(jg*zk)+"元");
				}
				break;
			}
			else 
				System.out.println("你输入的数据有误！");
		}while(true);
	}
	
}
