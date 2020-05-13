import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
public class Jbutton extends JPanel{
	private JButton b1,b2,b3;
	public Jbutton(){
		b1 = new JButton("¹þ¹þ");
		b1.setMnemonic(KeyEvent.VK_D);
		b2 = new JButton("MM");
		b2.setMnemonic(KeyEvent.VK_M);
		b3 = new JButton("EE");
		b3.setMnemonic(KeyEvent.VK_E);
		b3.setEnabled(false);
		
		add(b1);
		add(b2);
		add(b3);
	}

	public static void main(String args[]) {
		Jbutton buto = new Jbutton();
		JFrame frame = new JFrame("ÐÂ°´Å¥");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.getContentPane().add(buto);
		frame.setSize(300,100);
		frame.setVisible(true);
	}
}
