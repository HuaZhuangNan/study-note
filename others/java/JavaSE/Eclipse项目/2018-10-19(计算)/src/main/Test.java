package main;


import java.util.Scanner;

public class Test {
	private double number1,number2,jg;
	private	int ff;
	private String str1,str2;
	Scanner N = new  Scanner(System.in);
	int js(){
		if(jg!=-1) {
			System.out.println("\t��ӭʹ��Сİ������");
			System.out.println("�������һ����");
			number1 = N.nextInt();
		}
		System.out.println("������ڶ�����");
		number2 = N.nextInt();
		
		Calculator cal= new Calculator(number1,number2);//�½�����
		str1="123";
		str2="456";
		Calculator calstr= new Calculator(str1,str2);//�½�����
		System.out.println(calstr.add2());
		do {
			System.out.println("��������Ҫѡ��Ĺ���\n\t 1---�������\n\t 2---�������\n\t 3---�������\n\t 4---�������");
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
				System.out.println("����ָ����������������!");ff=5;
			}
		}while(ff==5);
		
		
		if(ff == 4 && jg == -1){
			System.out.println("��������Ϊ0\n����������!");
			js();
		}
		else{
			System.out.println("�������ļ�����Ϊ��"+jg);
			System.out.println("��ѡ����Ƿ�������㣿 1 �˳� 2 ����");
			ff = N.nextInt();
			if(ff==2){
				js();
			}else {
				System.out.println("лл���ʹ��!");
			}
		}
		N.close();//�ر�������
		return 1;
		
	}
	
}
