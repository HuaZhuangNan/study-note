package main;

import java.io.*;
import java.util.Scanner;

public class Main_one {

	public static void main(String argv[])
	{
		//��������������n
		int n,i,c;
		System.out.println("��������Ҫ��ӡ��������");
		Scanner N = new  Scanner(System.in);
		n = N.nextInt();
		N.close();//�ر�������
		for(i=1;i<=n;i++)
		{
			for(i=1;i<=2*i-1;i++)
			System.out.print("*");
		}
		
		
	}
}
