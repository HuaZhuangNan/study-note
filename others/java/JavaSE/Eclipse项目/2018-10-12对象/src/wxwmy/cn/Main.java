package wxwmy.cn;

import java.io.*;

public class Main {
	public static void main(String args[]) {
		String name,sex;
		int age;
		System.out.println("��ݔ���������");
		name="Сİ";
		sex="��";
		age=18;
		Tool info= new Tool(name, sex, age);//�½�����
		info.printInfo();//��ӡ��Ϣ����
	}
}
