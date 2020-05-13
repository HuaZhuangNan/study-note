
import java.applet.Applet;
import java.applet.AudioClip;
import java.awt.BorderLayout;
import java.awt.Graphics;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;

import javax.swing.JFrame;

public class GameWindow extends JFrame {
	GamePane p1;
	Thread t;
	ContrlPane p2;
	StatePane p3;
	boolean state;//��¼����״̬
	AudioClip music;//��������
	public GameWindow()
	{
		super();
		initialize();//��ʼ��
	}
	
	void initialize() {
		p2=new ContrlPane();
		p3=new StatePane();
		p1=new GamePane(p3);
		//t=new Thread(p1);
		
		this.setBounds(100,100,400,600);
		this.setResizable(false);
		this.setVisible(true);
		
		this.getContentPane().add("Center",p1);
		this.getContentPane().add("North",p2);
		this.getContentPane().add("South",p3);
		
		
		
		p2.butStart.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent evt) {
				if(t!=null) {
					t.stop();//ֹͣԭ�����߳�
					music.stop();//�ظ�
				}else {  //��һ���¼�
					keyEvent();//���ü����¼�
					btnEvent();//��ť����
				}
				Music();//���ֿ�ʼ
				t = new Thread(p1);//ÿ�ο�������һ��
				t.start();
				state=true;//��������״̬
				p2.butStart.setFocusable(false);
				p2.butStop.setFocusable(false);
				p2.butSuspend.setFocusable(false);
				p2.butResume.setFocusable(false);
			}
		});
		p2.butStop.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent evt) {
				if(t!=null)
					t.stop();
				state=false;//��������״̬
				music.stop();//�ظ�
				p2.butStart.setFocusable(false);
				p2.butStop.setFocusable(false);
				p2.butSuspend.setFocusable(false);
				p2.butResume.setFocusable(false);
			}
		});
		
		
		this.setFocusable(true);
	}
	void btnEvent() {  //��ť�¼�

		p2.butSuspend.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent evt) {
				if(t!=null)
					t.suspend();
				state=false;//��������״̬
				music.stop();//�ظ�
				p2.butStart.setFocusable(false);
				p2.butStop.setFocusable(false);
				p2.butSuspend.setFocusable(false);
				p2.butResume.setFocusable(false);
			}
		});
		p2.butResume.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent evt) {
				if(t!=null)
					t.resume();
				state=true;//��������״̬
				music.play();//����
				p2.butStart.setFocusable(false);
				p2.butStop.setFocusable(false);
				p2.butSuspend.setFocusable(false);
				p2.butResume.setFocusable(false);
			}
		});
	}
	void keyEvent() {  //ֻ�п�����Ϸ����Ч
		this.addKeyListener(new KeyListener() {
			public void keyPressed(KeyEvent arg0) {
				int code=arg0.getKeyCode();
				//System.out.print(code);

				switch(code)
				{
				case 37: p1.snake.direct=Snake.LEFT;break;//��������
				case 40: p1.snake.direct=Snake.DOWN;break;
				case 39: p1.snake.direct=Snake.RIGHT;break;
				case 38: p1.snake.direct=Snake.UP;break;
				case 32:  //��ӿո����ͣ����
					if(state) {
						t.suspend() ;
						state=false;
					} else {
						t.resume();
						state=true;
					} 
				break;
				}
			}
			public void keyReleased(KeyEvent arg0) {
				}
			public void keyTyped(KeyEvent arg0) {
			}
			
		});
	}
	void Music(){//�������ֲ���
		try {
			URL cb;
			File f = new File("music/music.wav"); // ����������������ļ����ڵ�·��
			cb = f.toURL();
			music = Applet.newAudioClip(cb);
			music.play();//��ʼ����	
			music.loop();//ѭ������
			//System.out.println("���Բ���"+cb);
			// ѭ������ aau.play()
		} catch (MalformedURLException e) {
			//System.out.println("����ʧ��");
			//e.printStackTrace();
		}
	}
	
	
	public static void main(String[] args) {
		new GameWindow();
	}

}
