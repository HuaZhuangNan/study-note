
import javax.swing.JButton;
import javax.swing.JPanel;

public class ContrlPane extends JPanel {
	public JButton butStart,butStop,butSuspend,butResume;
	ContrlPane()
	{
		butStart=new JButton("��ʼ");
		butStop=new JButton("����");
		butSuspend=new JButton("��ͣ");
		butResume=new JButton("����");
		this.add(butStart);
		this.add(butStop);
		add(butSuspend);
		add(butResume);
	}
}
