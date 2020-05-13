
import javax.swing.JButton;
import javax.swing.JPanel;

public class ContrlPane extends JPanel {
	public JButton butStart,butStop,butSuspend,butResume;
	ContrlPane()
	{
		butStart=new JButton("开始");
		butStop=new JButton("结束");
		butSuspend=new JButton("暂停");
		butResume=new JButton("继续");
		this.add(butStart);
		this.add(butStop);
		add(butSuspend);
		add(butResume);
	}
}
