package main;

import java.io.*;
import java.util.Scanner;

public class Main_one {

	public static void main(String argv[])
	{
		//�������� �·�m,����p,�۸�jg,�ۿ�zk;
		int m = 0,p=0,jg=398;
		double zk=1;
		do{
			System.out.println("�������·����֣�");
			Scanner M = new  Scanner(System.in);
			m = M.nextInt();
			M.close();//�ر�������
			System.out.println("������������");
			Scanner P = new  Scanner(System.in);
			p = P.nextInt();
			P.close();//�ر�������
			if(m > 0 && m <= 12 && p>=0 && p<=1000 )
			{	
				if(m==4 || m==5 || m==7 || m==8 ||m==10) 
				{
					if(p>20)
					  zk=0.8;
					System.out.println("���ǵ�Ʊ��Ϊÿ��"+(float)(jg*zk)+"Ԫ");
				}
					
				else
				{
					if(p>20)
							zk=0.7;
					else
							zk=0.8;
					System.out.println("���ǵ�Ʊ��Ϊÿ��"+(float)(jg*zk)+"Ԫ");
				}
				break;
			}
			else 
				System.out.println("���������������");
		}while(true);
	}
	
}
