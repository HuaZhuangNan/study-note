package main;

public abstract class Addition {
	abstract String add();
}	
class NumberAddition extends Addition{
	int a,b;
	int s;
	public NumberAddition(int a, int b) {
		this.a=a;
		this.b=b;
	}
	public String add() {
		s=a+b;
		return ""+s+"";
	}
}
class TextConcatenation extends Addition{
	String a,b;
	public TextConcatenation(String a, String b) {
		this.a=a;
		this.b=b;
	} 
	String add() {
		return a+b;
	}
}