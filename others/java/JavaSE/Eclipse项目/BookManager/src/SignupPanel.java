import javax.swing.*;
import java.awt.*;
public class SignupPanel extends JPanel{
	JLabel account ,password,jb;
	JTextField accountID;
	JPasswordField accountPWD,accountPWD1;
	JButton loginBtn,signupBtn;
	public  SignupPanel() 
	{
		super();
		initialize();
	}
	void initialize() 
	{
		account = new JLabel("�˺�");
		password = new JLabel("����");
		jb = new JLabel("ȷ������");
		
		accountID = new JTextField(10);
		accountPWD = new JPasswordField(10);
		accountPWD1 = new JPasswordField(10);
		
	//	loginBtn = new JButton("��½");
		signupBtn = new JButton("ע��");
		//JPanel jp = new JPanel();
		this.setLayout(new GridLayout(4,2));
		this.add(account);
		this.add(accountID);
		
		this.add(password);
		this.add(accountPWD);
		
		this.add(jb);
		this.add(accountPWD1);
		
		
		//this.add(loginBtn);
		this.add(signupBtn);
	}
}
