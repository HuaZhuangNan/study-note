

import javax.swing.JLabel;
import javax.swing.JPanel;

public class StatePane extends JPanel {
	JLabel l;
	StatePane()
	{
		super();
		l=new JLabel();
		l.setText("蛇的分数是: "+"  蛇的速度是: ");
		this.add(l);
	}
}
