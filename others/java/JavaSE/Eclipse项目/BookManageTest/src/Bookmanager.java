
import java.awt.*;
import javax.swing.*;

import java.util.Arrays;

public class Bookmanager extends JFrame{
		LoginPanel log;
		
		public Bookmanager() {
			super();
			initialize();//构造函
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
//			//连接数据库
//			m.getConn();
//			String[] filed = {"*"};
//			//所有数据
//			String[][] books= m.getData(filed,"bookinfo");
//			if(books==null) {
//				System.out.println("书籍信息为空");
//			}
//			String[][] user= m.getData(filed,"users");
//			if(user==null) {
//				System.out.println("用户信息为空");
//			}
//			String[][] booklist= m.getData(filed,"booklist");
//			if(user==null) {
//				System.out.println("书单信息为空");
//			}
//			System.out.println(Arrays.toString(m.getData(filed,"bookinfo")[0]));
//			//更据id查询
//			System.out.println(Arrays.toString(m.getData(filed,"VIP WHERE VIPID=2")[0]));
//			//字段查询
//			String[] fileds = {"Name","job"};
//			System.out.println(Arrays.toString(m.getData(fileds,"VIP")[0]));
//			//字段条件查询
//			System.out.println(Arrays.toString(m.getData(fileds,"VIP WHERE VIPID=2")[0]));
			//关闭连接
			//m.closed();
		//}

//}
