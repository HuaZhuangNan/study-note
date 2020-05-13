import javax.swing.*;
import java.awt.*;
public class BookPanel extends JPanel{
		JLabel content = new JLabel("欢迎进入图书管理系统");
		JButton exitBtn = new JButton("注销");
		
		public BookPanel() 
		{
			this.setLayout(new BorderLayout());
			content.setHorizontalAlignment(JLabel.CENTER);
			this.add(content,BorderLayout.CENTER);
			this.add(exitBtn,BorderLayout.SOUTH);
		}
			
}
		

