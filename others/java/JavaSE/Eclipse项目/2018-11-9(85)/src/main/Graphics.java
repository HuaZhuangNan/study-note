package main;

public abstract class Graphics {
	private String name;
	private float area;
	protected Graphics(String name) {
		this.name=name;
	}
	protected void setArea(float area) {
		this.area = area;
	}
	public float getArea() {
		
		return area;
	}
	public String getName() {
		return name;
	}
	public String toSrting() {
		return name+ "s aera is "+area;
	}
	protected abstract float calculateArea();
}
/*
 * 矩行，长方形
 */
class Rectangle extends Graphics{
	private float height;
	private float width;
	
	public Rectangle(float height,float width){
		super("Rectangle");
		this.height = height;
		this.width = width;
		setArea(calculateArea());
	}
	protected float calculateArea() {
		return height*width;
	}
}
/*
 *三角形 
 */
class Triangle extends Graphics{
	private float doenLine;
	private float height;
	public Triangle (float doenLine, float height) {
		super("Triangle");
		this.doenLine = doenLine;
		this.height = height;
		setArea(calculateArea());
	}
	protected float calculateArea() {
		return (doenLine*height)/2F;
	}
}
/*
 *梯形 
 */
class Trapezoid extends Graphics{
	private float doenLine;
	private float upLine;
	private float height;
	public Trapezoid(float doenLine,float upLine ,float height) {
		super("Trapezoid");
		this.doenLine = doenLine;
		this.upLine = upLine;
		this.height =height;
		setArea(calculateArea());
	}
	protected float calculateArea() {
		return (doenLine+upLine)*height/2F;
	}
}