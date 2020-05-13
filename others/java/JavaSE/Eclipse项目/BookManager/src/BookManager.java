import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class BookManager extends JFrame implements ActionListener{
		LoginPanel loginP;
		SignupPanel signupP;
		BookPanel bookP;
		CardLayout card = new CardLayout();
		MySQL m = null;
		
		public BookManager() 
		{
			super();
			initialize();
		}
		void initialize() 
		{
			//初始化布局
			this.setSize(300,200);
			this.setDefaultCloseOperation(DISPOSE_ON_CLOSE);
			this.setLayout(new BorderLayout());
			this.setTitle("图书管理系统");
			this.setLayout(card);
			this.setVisible(true);
			
			loginP = new LoginPanel();
			loginP.loginBtn.addActionListener(this);// 注册监听 到当前类
			loginP.signupBtn.addActionListener(this);// 注册监听
			
			signupP = new SignupPanel();
			signupP.signupBtn.addActionListener(this);
			
			bookP = new BookPanel();
			bookP.exitBtn.addActionListener(this);
			
			//设置跳转面板
			this.getContentPane().add("login",loginP);
			this.getContentPane().add("signup",signupP);
			this.getContentPane().add("book",bookP);
			
			
			m = new MySQL("MySQL","127.0.0.1","3306","mysql","root","rootygj","utf-8");
			//连接数据库
			m.getConn();
			//插入数据
			String [] fileds = {"id","accountID","accountPWD"};
			String [] values = {"1","root","123456"};
			m.addData("users", fileds, values);
			m.closed();
			
		}
		public void actionPerformed(ActionEvent e) {
			 

			if( e.getSource()==loginP.loginBtn) {
				//登录 到 book面板
				String [] fileds = {"accountID","accountPWD"};
				String [] datas = {loginP.accountID.getText(),loginP.accountPWD.getText()};
				//获取输入值loginP.accountID.getText();
				//连接数据库
				m.getConn();
				boolean[] ff = m.dataTest("users",fileds,datas);
				//关闭数据库
				m.closed();
				if(!ff[0]) {
					System.out.println("accountID输入有误");
				}else if(!ff[1]) {
					System.out.println("accountPWD输入有误");
				}else {
					card.show(this.getContentPane(),"book");
				}
				
				
			}
			if( e.getSource()==loginP.signupBtn ){
				//登录 到 注册
				
				//连接数据库
				if(signupP.accountID.getText().length() == 0) {
					System.out.println("accountID输入有误");
				}
				if(signupP.accountPWD.getText().length() == 0) {
					System.out.println("accountID输入有误");
				}
				if(signupP.accountPWD1.getText().length() == 0) {
					System.out.println("accountID输入有误");
				}
				if(signupP.accountPWD.getText() == signupP.accountPWD1.getText()) {
					System.out.println("输入不一致");
				}else {
					m.getConn();
					//插入数据
					String [] fileds = {"id","accountID","accountPWD"};
					String [] values = {"2",signupP.accountID.getText(),signupP.accountPWD.getText()};
					m.addData("users", fileds, values);
					m.closed();
					card.show(this.getContentPane(),"signup");
				}
			}
			if( e.getSource()==signupP.signupBtn ) {
				//注册 到 登录
				card.show(this.getContentPane(),"login");
			}
			if(e.getSource()==bookP.exitBtn) {
				//注销 到登录
				card.show(this.getContentPane(),"login");
			}
		}
		
		public static void main(String [] args) 
		{
			//安装数据库
			//Install s = new Install();
			//s.creTable();
			//删除数据库
			//s.deTable();
			
			
			BookManager bm =new BookManager();
		}
}
