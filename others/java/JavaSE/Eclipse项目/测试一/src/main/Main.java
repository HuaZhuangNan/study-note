package main;

/*
 * Ҫ�����̣�
 * 1�������������+��-��*��/
 * 2��������2��������
 * 3����ӡ���
 * 4�����������ˡ����������� ��ֹͣ
 */

import java.io.*;
import java.util.Scanner;


public class Main {

	public static void main(String arg[])
	{
		//���������������������һ�Ͷ�,���
		char fh = ' ';
		double nub1 = 0 , nub2 = 0, rec = 0;
		Scanner sc = new  Scanner(System.in);
		do
		{
			do
			{
				System.out.println("�������������");
				String fhst = sc.next();//����ֵ�����ַ���
				fh =fhst.charAt(0);//ȡ���ַ����е�һ���ַ�
				if(fh != '+' && fh != '-' && fh != '*' && fh != '/' )
					System.out.print("�������������,");
			}
			while( fh != '+' && fh != '-' && fh != '*' && fh != '/' );
			
			System.out.println("�������һ�����֣�");
			nub1 = sc.nextDouble();
			
			do
			{
				System.out.println("������ڶ������֣�");
				nub2 = sc.nextDouble();
				if(nub2==0)
					System.out.print("�ڶ������ֲ���Ϊ��,");
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
//				System.out.println("�������������");
//				fh=0;
			}
			System.out.println(nub1+" "+fh+" "+nub2+"����Ľ��Ϊ"+rec);
			System.out.println("��ѡ���Ƿ����������\"!\" �˳� ; ���������ַ�����");
			String fhst = sc.next();
			fh =fhst.charAt(0);
		}
		while( fh != '!');
		sc.close();//�ر�������
		System.out.println("лл���ʹ�ã�");
	}
}
