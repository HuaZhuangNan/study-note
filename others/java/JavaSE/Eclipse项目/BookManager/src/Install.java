public class Install {
	private MySQL m=null;
	
	public Install() {
		m = new MySQL("MySQL","127.0.0.1","3306","mysql","root","rootygj","utf-8");
		//连接数据库
		m.getConn();
	}
	public void creTable() {
//		//建立库
//		String sql = "DROP DATABASE 'Bookmanager' ";
//		m.upData(sql);
		//建立书籍信息表
		String sql1 = "create table bookInfo(" + 
				"ISBN integer primary key," + 
				"name varchar(20)," + 
				"author varchar(30)," + 
				"publisher varchar(50))";
		m.upData(sql1);
		//建立用户表
		String sql2 = "create table users(" + 
				"id integer primary key," + 
				"accountID varchar(20), "+ 
				"accountPWD varchar(20))";
		m.upData(sql2);
		//建立书单表
		String sql3 = "create table bookList("+
				"id integer primary key,"+
				"bookISBN integer)";
		m.upData(sql3);
		//关闭连接
		if(m!=null)m.closed();
		System.out.println("创建成功!");
	}
	public void deTable() {
		//建立书籍信息表
		String sql = "DROP TABLE bookInfo";
		m.upData(sql);
		//建立用户表
		String sql2 = "DROP TABLE users";
		m.upData(sql2);
		//建立书单表
		String sql3 = "DROP TABLE bookList";
		m.upData(sql3);
		
		//关闭连接
		if(m!=null)m.closed();
		
		System.out.println("删除成功!");
	}
	
}


