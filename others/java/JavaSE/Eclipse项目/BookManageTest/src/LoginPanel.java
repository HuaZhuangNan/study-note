
import java.awt.*;
import javax.swing.*;
//��¼��

public class LoginPanel extends JFrame{

	JLabel accout;
	JLabel password;
	JTextField accoutID;
	JPasswordField accoutPWD;
	JButton loginBtn;
	JButton signupBtn;
	
	
	public LoginPanel() {
		super();
		initialize();//���캯
	}
	void initialize() {
		accout = new JLabel("�˺�");
		password = new JLabel("����");
		accoutID = new JTextField();
		accoutPWD = new JPasswordField();
		loginBtn = new JButton("��¼");
		signupBtn = new JButton("ע��");
		this.setLayout(new GridLayout(3,2));
		this.add(accout);
		//accout.setBounds(x, y, width, height);
		this.add(accoutID);
		this.add(password);
		this.add(accoutPWD);
		this.add(loginBtn);
		this.add(signupBtn);
	}
	
	
}
