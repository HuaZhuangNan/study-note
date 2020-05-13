
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
	boolean state;//记录运行状态
	AudioClip music;//背景音乐
	public GameWindow()
	{
		super();
		initialize();//初始化
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
					t.stop();//停止原来的线程
					music.stop();//关歌
				}else {  //第一次事件
					keyEvent();//调用键盘事件
					btnEvent();//按钮监听
				}
				Music();//音乐开始
				t = new Thread(p1);//每次开启创建一个
				t.start();
				state=true;//设置运行状态
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
				state=false;//设置运行状态
				music.stop();//关歌
				p2.butStart.setFocusable(false);
				p2.butStop.setFocusable(false);
				p2.butSuspend.setFocusable(false);
				p2.butResume.setFocusable(false);
			}
		});
		
		
		this.setFocusable(true);
	}
	void btnEvent() {  //按钮事件

		p2.butSuspend.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent evt) {
				if(t!=null)
					t.suspend();
				state=false;//设置运行状态
				music.stop();//关歌
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
				state=true;//设置运行状态
				music.play();//开歌
				p2.butStart.setFocusable(false);
				p2.butStop.setFocusable(false);
				p2.butSuspend.setFocusable(false);
				p2.butResume.setFocusable(false);
			}
		});
	}
	void keyEvent() {  //只有开启游戏才生效
		this.addKeyListener(new KeyListener() {
			public void keyPressed(KeyEvent arg0) {
				int code=arg0.getKeyCode();
				//System.out.print(code);

				switch(code)
				{
				case 37: p1.snake.direct=Snake.LEFT;break;//编码修正
				case 40: p1.snake.direct=Snake.DOWN;break;
				case 39: p1.snake.direct=Snake.RIGHT;break;
				case 38: p1.snake.direct=Snake.UP;break;
				case 32:  //添加空格键暂停继续
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
	void Music(){//背景音乐播放
		try {
			URL cb;
			File f = new File("music/music.wav"); // 引号里面的是音乐文件所在的路径
			cb = f.toURL();
			music = Applet.newAudioClip(cb);
			music.play();//开始播放	
			music.loop();//循环播放
			//System.out.println("可以播放"+cb);
			// 循环播放 aau.play()
		} catch (MalformedURLException e) {
			//System.out.println("播放失败");
			//e.printStackTrace();
		}
	}
	
	
	public static void main(String[] args) {
		new GameWindow();
	}

}
