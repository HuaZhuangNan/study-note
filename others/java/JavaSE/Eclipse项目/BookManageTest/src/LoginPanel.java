
import java.awt.*;
import javax.swing.*;
//µÇÂ¼¿ò

public class LoginPanel extends JFrame{

	JLabel accout;
	JLabel password;
	JTextField accoutID;
	JPasswordField accoutPWD;
	JButton loginBtn;
	JButton signupBtn;
	
	
	public LoginPanel() {
		super();
		initialize();//¹¹Ôìº¯
	}
	void initialize() {
		accout = new JLabel("ÕËºÅ");
		password = new JLabel("ÃÜÂë");
		accoutID = new JTextField();
		accoutPWD = new JPasswordField();
		loginBtn = new JButton("µÇÂ¼");
		signupBtn = new JButton("×¢²á");
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
