import java.awt.*;
import javax.swing.*;

public class MyJFrame {
	public static void main (String arg[]) {
/*		int n = -1;
		JFrame myframe = new JFrame("����");
		myframe.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);//�˳�����--�رպ�ֱ���˳�
		myframe.setSize(300,200);//���ڴ�С����--��,��
		myframe.setVisible(true);//�Ƿ���ʾ��Ĭ��false,��Window�������õ�false��
		//������
		JLabel label = new JLabel("Сĭĭ");//����һ���ı���ǩ
//		myframe.getContentPane().add(label,BorderLayout.CENTER);//�ŵ�һ�����������
		n = JOptionPane.showConfirmDialog(null,"��ѡ��");//����ȷ�϶Ի���
		if(n==0) {
			label.setText("��������\n");
		}else if (n==1) {
			label.setText("�����˷�\n");
		}else if (n==2) {
			label.setText("������ȡ��\n");
		}
		JOptionPane.showConfirmDialog(null,label);*/
		
		JPanel jp = new JPanel();
		jp.setBackground(Color.RED);
		JButton jb = new JButton("��ť");
		jp.add(jb);
		JFrame jf = new JFrame("���");
		Container cp = jf.getContentPane();
		cp.setBackground(Color.BLUE);
		cp.add(jp,BorderLayout.NORTH);
		jf.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		jf.setSize(320,200);
		jf.setVisible(true);
		
	}
}
