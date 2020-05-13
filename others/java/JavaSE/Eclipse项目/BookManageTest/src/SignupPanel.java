import java.awt.*;
import javax.swing.*;

public class SignupPanel extends JFrame {
	//两边标间
		JLabel accout;
		JLabel password;
		JLabel password2;
		JTextField accoutID;
		JPasswordField accoutPWD;
		JPasswordField accoutPWD2;
		JButton jp;
		
		public SignupPanel() {
			super();
			initialize();//构造函
		}
		void initialize() {
			accout = new JLabel("请输入账号");
			password = new JLabel("请输入密码");
			password2 = new JLabel("请确认密码");
			accoutID = new JTextField();
			accoutPWD = new JPasswordField();
			accoutPWD2 = new JPasswordField();
			jp = new JButton("注册");
			this.setLayout(new GridLayout(3,2));
			this.add(accout);
			//accout.setBounds(x, y, width, height);
			this.add(accoutID);
			this.add(password);
			this.add(accoutPWD);
			this.add(password2);
			this.add(accoutPWD2);
			this.add(jp,BorderLayout.CENTER);
			this.setLayout(new BorderLayout());
		}
}
