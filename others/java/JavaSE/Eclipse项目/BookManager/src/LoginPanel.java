import javax.swing.*;

import org.omg.CORBA.INITIALIZE;

import java.awt.*;
public class LoginPanel extends JPanel{
			JLabel account ,password;
			JTextField accountID;
			JPasswordField accountPWD;
			JButton loginBtn,signupBtn;
			
		public LoginPanel() 
		{
			super();
			initialize();
		}
		void initialize() 
		{
			account = new JLabel("�˺�",JLabel.CENTER);
			password = new JLabel("����",JLabel.CENTER);
			
			accountID = new JTextField(10);
			accountPWD = new JPasswordField(10);
			
			loginBtn = new JButton("��½");
			
			signupBtn = new JButton("ע��");
			//c.setBounds(x��λ�ã�y��λ�ã���ť�Ŀ���ť�ĸ�
			this.setLayout(new GridLayout(4,3));
			this.add(new JLabel(""));
			this.add(new JLabel(""));
			this.add(new JLabel(""));
			this.add(account);
			//account.setSize(100,60);
			this.add(accountID);
			this.add(new JLabel(""));
			this.add(password);
			this.add(accountPWD);
			this.add(new JLabel(""));
			
			this.add(loginBtn);
			this.add(new JLabel(""));
			this.add(signupBtn);
			
		}
}
