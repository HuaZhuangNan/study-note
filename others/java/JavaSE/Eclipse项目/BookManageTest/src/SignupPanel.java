import java.awt.*;
import javax.swing.*;

public class SignupPanel extends JFrame {
	//���߱��
		JLabel accout;
		JLabel password;
		JLabel password2;
		JTextField accoutID;
		JPasswordField accoutPWD;
		JPasswordField accoutPWD2;
		JButton jp;
		
		public SignupPanel() {
			super();
			initialize();//���캯
		}
		void initialize() {
			accout = new JLabel("�������˺�");
			password = new JLabel("����������");
			password2 = new JLabel("��ȷ������");
			accoutID = new JTextField();
			accoutPWD = new JPasswordField();
			accoutPWD2 = new JPasswordField();
			jp = new JButton("ע��");
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
