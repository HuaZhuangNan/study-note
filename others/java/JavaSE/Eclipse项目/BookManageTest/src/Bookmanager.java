
import java.awt.*;
import javax.swing.*;

import java.util.Arrays;

public class Bookmanager extends JFrame{
		LoginPanel log;
		
		public Bookmanager() {
			super();
			initialize();//���캯
		}
		void initialize() {
			this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
			this.setSize(800,600);
			this.setLayout(new BorderLayout());
			log = new LoginPanel();
			this.getContentPane().add(log,BorderLayout.CENTER);
			this.setVisible(true);
		}
		public static void main (String[] args) {
			Bookmanager b = new Bookmanager();
			
				
		}
}
			
//			Mysql m = new Mysql("SQLServer","127.0.0.1","1433","BooksManag","sa","rootygj","");
//			//�������ݿ�
//			m.getConn();
//			String[] filed = {"*"};
//			//��������
//			String[][] books= m.getData(filed,"bookinfo");
//			if(books==null) {
//				System.out.println("�鼮��ϢΪ��");
//			}
//			String[][] user= m.getData(filed,"users");
//			if(user==null) {
//				System.out.println("�û���ϢΪ��");
//			}
//			String[][] booklist= m.getData(filed,"booklist");
//			if(user==null) {
//				System.out.println("�鵥��ϢΪ��");
//			}
//			System.out.println(Arrays.toString(m.getData(filed,"bookinfo")[0]));
//			//����id��ѯ
//			System.out.println(Arrays.toString(m.getData(filed,"VIP WHERE VIPID=2")[0]));
//			//�ֶβ�ѯ
//			String[] fileds = {"Name","job"};
//			System.out.println(Arrays.toString(m.getData(fileds,"VIP")[0]));
//			//�ֶ�������ѯ
//			System.out.println(Arrays.toString(m.getData(fileds,"VIP WHERE VIPID=2")[0]));
			//�ر�����
			//m.closed();
		//}

//}
