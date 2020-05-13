
import java.awt.Color;
import java.awt.Graphics;
public class Egg {
	public Square e;
	public int level;
	public final static int FIRST_LEVEL=100; 
	public final static int SECOND_LEVEL=50; 
	public final static int THIRD_LEVEL=20;
	public Color color;
	Egg(){
		e=new Square();
		level=1;
		color=Color.YELLOW;
	}
	Egg(int width,int height){
		this();
		e.x=((int)(Math.random()*(width/10)))*10;
		e.y=((int)(Math.random()*(height/10)))*10;
	}
	public void random(int width,int height){
		level=(int)(Math.random()*3);
		e.x=((int)(Math.random()*(width/10)))*10;
		e.y=((int)(Math.random()*(height/10)))*10;
	}
	public void draw(Graphics g)	{
		g.setColor(color);
		g.fillOval(e.x-1,e.y+1,e.length+2,e.length-2);
	}
}
