import java.util.Scanner;

public class BookManage {
	private static	int num;
	public static void main(String[] args) {
		manageSystem();
	}
	public static void manageSystem() { //ϵͳ��ʼ
		
		BookList bookInfo = new BookList();//��Ϣ����
		System.out.println("��ӭʹ��ͼ�����ϵͳ����������Ҫʵ�ֵĹ��ܣ�");
		do{
			System.out.print("1--�����鵥��Ϣ\n2--����鼮���鵥\n3--�����˳�");
			Scanner M = new  Scanner(System.in);//����������
			num = M.nextInt();
			switch (num) {
			case 1:
				bookInfo.showList();
				break;
			case 2:
				bookInfo.addBooks();
				break;
			case 3:
				System.out.println("лл���ʹ�ã�");
				M.close();//�رշ���ͻ
				break;
			default: 
				System.out.println("��������");
				break;
			}
		}while(num!=3);

	}
}
