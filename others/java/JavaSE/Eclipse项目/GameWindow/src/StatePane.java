

import javax.swing.JLabel;
import javax.swing.JPanel;

public class StatePane extends JPanel {
	JLabel l;
	StatePane()
	{
		super();
		l=new JLabel();
		l.setText("�ߵķ�����: "+"  �ߵ��ٶ���: ");
		this.add(l);
	}
}
