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
			account = new JLabel("’À∫≈",JLabel.CENTER);
			password = new JLabel("√‹¬Î",JLabel.CENTER);
			
			accountID = new JTextField(10);
			accountPWD = new JPasswordField(10);
			
			loginBtn = new JButton("µ«¬Ω");
			
			signupBtn = new JButton("◊¢≤·");
			//c.setBounds(x÷·Œª÷√£¨y÷·Œª÷√£¨∞¥≈•µƒøÌ£¨∞¥≈•µƒ∏ﬂ
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
