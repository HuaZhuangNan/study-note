import javax.swing.*;
import java.awt.*;
public class BookPanel extends JPanel{
		JLabel content = new JLabel("��ӭ����ͼ�����ϵͳ");
		JButton exitBtn = new JButton("ע��");
		
		public BookPanel() 
		{
			this.setLayout(new BorderLayout());
			content.setHorizontalAlignment(JLabel.CENTER);
			this.add(content,BorderLayout.CENTER);
			this.add(exitBtn,BorderLayout.SOUTH);
		}
			
}
		

