import java.util.ArrayList;
import java.util.Scanner;

public class BookList {
	private String  name,autor;
	private double  ISBN;
	private int  len;
	ArrayList List = new ArrayList();
	public void addBooks() {
		Scanner N = new  Scanner(System.in);
		do {
			System.out.println("�������������");
			name = N.nextLine();
			if(name.length() ==0) {
				System.out.println("�����������������룡");
			}
		}while(name.length()==0);
		do {
			System.out.println("������������(16λ)");
			ISBN = N.nextDouble();
			len =(""+ISBN).length();//""��4λ
			if(len<20) {
				System.out.println("�����������������룡");
			}
		}while(len<20);
		do {
			System.out.println("�������������");
			autor = N.next();//�����nextLine��Ĭ�϶�ȡ��һ��ֵ����Ϊ��ͬһ��������
			if(autor.length() ==0) {
				System.out.println("�����������������룡");
			}
		}while(autor.length() ==0);
		//N.close();�رջ���������������������
		len = List.size();
		List.add(new Books(name,autor,ISBN));
		if(len < List.size()) {
			System.out.println("��Ϣ¼��ɹ���");
		}else {
			System.out.println("��Ϣ¼��ʧ�ܣ�");
		}
	}
	public void showList() {
		if(List.size()==0) {
			System.out.println("�鵥��ϢΪ�����������Ϣ!");
		}else {
			System.out.println("ȫ���鵥��Ϣ����:");
			Object[] objs = List.toArray();
			for(int i=0;i<objs.length;i++) {
				Books info = (Books)objs[i];
				info.showInfo();
			}
		}
	}
}
