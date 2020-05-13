import java.util.Scanner;

public class BookManage {
	private static	int num;
	public static void main(String[] args) {
		manageSystem();
	}
	public static void manageSystem() { //系统开始
		
		BookList bookInfo = new BookList();//信息对象
		System.out.println("欢迎使用图书管理系统，请输入你要实现的功能！");
		do{
			System.out.print("1--检索书单信息\n2--添加书籍到书单\n3--程序退出");
			Scanner M = new  Scanner(System.in);//打开输入了流
			num = M.nextInt();
			switch (num) {
			case 1:
				bookInfo.showList();
				break;
			case 2:
				bookInfo.addBooks();
				break;
			case 3:
				System.out.println("谢谢你的使用！");
				M.close();//关闭防冲突
				break;
			default: 
				System.out.println("输入有误！");
				break;
			}
		}while(num!=3);

	}
}
