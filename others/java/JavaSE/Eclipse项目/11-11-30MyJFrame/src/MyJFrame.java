import java.awt.*;
import javax.swing.*;

public class MyJFrame {
	public static void main (String arg[]) {
/*		int n = -1;
		JFrame myframe = new JFrame("标题");
		myframe.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);//退出方法--关闭后直接退出
		myframe.setSize(300,200);//窗口大小方法--宽,高
		myframe.setVisible(true);//是否显示（默认false,在Window类里设置的false）
		//添加组件
		JLabel label = new JLabel("小沫沫");//创建一个文本标签
//		myframe.getContentPane().add(label,BorderLayout.CENTER);//放到一个内容面板中
		n = JOptionPane.showConfirmDialog(null,"请选择");//弹出确认对话框
		if(n==0) {
			label.setText("你点击了是\n");
		}else if (n==1) {
			label.setText("你点击了否\n");
		}else if (n==2) {
			label.setText("你点击了取消\n");
		}
		JOptionPane.showConfirmDialog(null,label);*/
		
		JPanel jp = new JPanel();
		jp.setBackground(Color.RED);
		JButton jb = new JButton("按钮");
		jp.add(jb);
		JFrame jf = new JFrame("面板");
		Container cp = jf.getContentPane();
		cp.setBackground(Color.BLUE);
		cp.add(jp,BorderLayout.NORTH);
		jf.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		jf.setSize(320,200);
		jf.setVisible(true);
		
	}
}
