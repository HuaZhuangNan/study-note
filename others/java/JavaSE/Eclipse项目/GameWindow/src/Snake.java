

import java.awt.Color;
import java.awt.Graphics;

public class Snake {
	public Square s[];
	public Color color;
	public int score;
	public int speed;
	public int direct;
	public final static int INIT_LEN=5;
	public final static int LEFT=1;
	public final static int UP=0;
	public final static int DOWN=2;
	public final static int RIGHT=3;
	Snake()
	{
		s=new Square[INIT_LEN];
		for(int i=0;i<s.length;i++)
		{
			s[i]=new Square(100-10*i,50);
		}
		color=Color.GREEN;
		direct=RIGHT;//Ä¬ÈÏÏòÓÒ±ß
		score=0;
		speed=200;
	}
	public void move()
	{
		for(int i=s.length-1;i>0;i--)
		{
			s[i].x=s[i-1].x;
			s[i].y=s[i-1].y;
			//±ßÔµÅÐ¶Ï 400±ßÔµ  550
			if(s[0].x == 390 && direct==RIGHT) {
				s[0].x=0;
			}
			if(s[0].x == 0 && direct==LEFT) {
			   s[0].x=390;
			}
			if(s[0].y == 540 && direct==DOWN) {
				s[0].y=0;
			}
			if(s[0].y == 0 && direct==UP) {
			   s[0].y=540;
			}
		}
		switch(direct)
		{
		case UP:s[0].y-=10;break;
		case DOWN:s[0].y+=10;break;
		case LEFT:s[0].x-=10;break;//×ó±ßxÊÇ¼õ
		case RIGHT:s[0].x+=10;break;
		}
	}
	public void grow()
	{
		int len=s.length;
		Square sTemp[]=new Square[len+1];
		for(int i=0;i<s.length;i++)
		{
			sTemp[i]=new Square();
			sTemp[i].x=s[i].x;sTemp[i].y=s[i].y;
		}
		sTemp[s.length]=new Square();
		sTemp[s.length].x=s[s.length-1].x;
		sTemp[s.length].y=s[s.length-1].y;
		s=sTemp;
	}
	public void draw(Graphics g)
	{
		g.setColor(color);
		for(int i=0;i<s.length;i++)
		{
			g.drawRect(s[i].x,s[i].y,Square.length, Square.length);
		}
	}
}
