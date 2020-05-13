

import java.awt.Color;
import java.awt.Graphics;

import javax.swing.JPanel;

public class GamePane extends JPanel implements Runnable {
	public Snake snake;
	public Egg egg;
	public StatePane p;
	GamePane(StatePane p) {
		snake = new Snake();
		egg = new Egg();
		this.p=p;
	}
	public void paint(Graphics g) {
		g.setColor(new Color(238,238,238));
		g.fillRect(0, 0, 400, 600);
		snake.draw(g);
		egg.draw(g);
	}
	public void run() {
		while (true) {
			try {
				Thread.sleep(snake.speed);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			snake.move();
			p.l.setText("蛇的分数是:："+snake.score+" 蛇的速度是： "+snake.speed);//开始也要运行
			if(isEat())
			{	egg.random(400, 550);
				p.l.setText("蛇的分数是:："+snake.score+" 蛇的速度是： "+snake.speed);
				if(snake.score>(snake.s.length-4)*100)
				{	snake.grow();snake.speed=(int)(snake.speed*0.9);
				}
			}
			repaint();
		}
	}
	public boolean isEat()
	{
		if(egg.e.x==snake.s[0].x&&egg.e.y==snake.s[0].y)
		{	switch(egg.level)
			{
			case 0:snake.score+=egg.FIRST_LEVEL;break;
			case 1:snake.score+=egg.SECOND_LEVEL;break;
			case 2:snake.score+=egg.THIRD_LEVEL;break;
			}
			return true;
		}
		else return false;
	}
}
