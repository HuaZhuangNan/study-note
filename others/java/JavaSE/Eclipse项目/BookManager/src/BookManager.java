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
			//��ʼ������
			this.setSize(300,200);
			this.setDefaultCloseOperation(DISPOSE_ON_CLOSE);
			this.setLayout(new BorderLayout());
			this.setTitle("ͼ�����ϵͳ");
			this.setLayout(card);
			this.setVisible(true);
			
			loginP = new LoginPanel();
			loginP.loginBtn.addActionListener(this);// ע����� ����ǰ��
			loginP.signupBtn.addActionListener(this);// ע�����
			
			signupP = new SignupPanel();
			signupP.signupBtn.addActionListener(this);
			
			bookP = new BookPanel();
			bookP.exitBtn.addActionListener(this);
			
			//������ת���
			this.getContentPane().add("login",loginP);
			this.getContentPane().add("signup",signupP);
			this.getContentPane().add("book",bookP);
			
			
			m = new MySQL("MySQL","127.0.0.1","3306","mysql","root","rootygj","utf-8");
			//�������ݿ�
			m.getConn();
			//��������
			String [] fileds = {"id","accountID","accountPWD"};
			String [] values = {"1","root","123456"};
			m.addData("users", fileds, values);
			m.closed();
			
		}
		public void actionPerformed(ActionEvent e) {
			 

			if( e.getSource()==loginP.loginBtn) {
				//��¼ �� book���
				String [] fileds = {"accountID","accountPWD"};
				String [] datas = {loginP.accountID.getText(),loginP.accountPWD.getText()};
				//��ȡ����ֵloginP.accountID.getText();
				//�������ݿ�
				m.getConn();
				boolean[] ff = m.dataTest("users",fileds,datas);
				//�ر����ݿ�
				m.closed();
				if(!ff[0]) {
					System.out.println("accountID��������");
				}else if(!ff[1]) {
					System.out.println("accountPWD��������");
				}else {
					card.show(this.getContentPane(),"book");
				}
				
				
			}
			if( e.getSource()==loginP.signupBtn ){
				//��¼ �� ע��
				
				//�������ݿ�
				if(signupP.accountID.getText().length() == 0) {
					System.out.println("accountID��������");
				}
				if(signupP.accountPWD.getText().length() == 0) {
					System.out.println("accountID��������");
				}
				if(signupP.accountPWD1.getText().length() == 0) {
					System.out.println("accountID��������");
				}
				if(signupP.accountPWD.getText() == signupP.accountPWD1.getText()) {
					System.out.println("���벻һ��");
				}else {
					m.getConn();
					//��������
					String [] fileds = {"id","accountID","accountPWD"};
					String [] values = {"2",signupP.accountID.getText(),signupP.accountPWD.getText()};
					m.addData("users", fileds, values);
					m.closed();
					card.show(this.getContentPane(),"signup");
				}
			}
			if( e.getSource()==signupP.signupBtn ) {
				//ע�� �� ��¼
				card.show(this.getContentPane(),"login");
			}
			if(e.getSource()==bookP.exitBtn) {
				//ע�� ����¼
				card.show(this.getContentPane(),"login");
			}
		}
		
		public static void main(String [] args) 
		{
			//��װ���ݿ�
			//Install s = new Install();
			//s.creTable();
			//ɾ�����ݿ�
			//s.deTable();
			
			
			BookManager bm =new BookManager();
		}
}
