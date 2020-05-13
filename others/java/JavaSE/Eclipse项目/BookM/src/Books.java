
public class Books {
	private String  name,autor;
	private double  ISBN;
	public Books(String name,String autor,double ISBN) {
		this.name = name;
		this.autor = autor;
		this.ISBN = ISBN;		
	}
	public void showInfo() {
		System.out.println("书号:"+ISBN+"书名:"+name+"作者"+autor);
	}
}