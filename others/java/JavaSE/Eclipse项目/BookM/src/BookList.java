import java.util.ArrayList;
import java.util.Scanner;

public class BookList {
	private String  name,autor;
	private double  ISBN;
	private int  len;
	ArrayList List = new ArrayList();
	public void addBooks() {
		Scanner N = new  Scanner(System.in);
		do {
			System.out.println("请输入书的书名");
			name = N.nextLine();
			if(name.length() ==0) {
				System.out.println("输入有误请重新输入！");
			}
		}while(name.length()==0);
		do {
			System.out.println("请输入书的书号(16位)");
			ISBN = N.nextDouble();
			len =(""+ISBN).length();//""有4位
			if(len<20) {
				System.out.println("输入有误请重新输入！");
			}
		}while(len<20);
		do {
			System.out.println("请输入书的作者");
			autor = N.next();//如果用nextLine会默认读取上一个值，因为是同一个输入流
			if(autor.length() ==0) {
				System.out.println("输入有误请重新输入！");
			}
		}while(autor.length() ==0);
		//N.close();关闭会造成主程序的输入流问题
		len = List.size();
		List.add(new Books(name,autor,ISBN));
		if(len < List.size()) {
			System.out.println("信息录入成功！");
		}else {
			System.out.println("信息录入失败！");
		}
	}
	public void showList() {
		if(List.size()==0) {
			System.out.println("书单信息为空请先添加信息!");
		}else {
			System.out.println("全部书单信息如下:");
			Object[] objs = List.toArray();
			for(int i=0;i<objs.length;i++) {
				Books info = (Books)objs[i];
				info.showInfo();
			}
		}
	}
}
