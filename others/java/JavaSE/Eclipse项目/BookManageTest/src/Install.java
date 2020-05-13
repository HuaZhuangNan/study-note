import java.util.Arrays;

public class Install {
//	//安装数据库
//	Install s = new Install();
//	s.sql();
//新建数据表
	public void sql() {

		Mysql m = new Mysql("SQLServer","127.0.0.1","1433","HIMS","sa","rootygj","");
		//连接数据库
		m.getConn();
		//建立书籍信息表
		String sql = "CREATE TABLE bookInfo(id int auto_increment primary key not null,bname char(10) NOT NULL UNIQUE KEY,bauthor varchar(16))DEFAULT CHARSET=utf8";
		m.upData(sql);
//		//建立用户表
//		String sql2 = "CREATE TABLE users ("+
//				"uid int(6) PRIMARY KEY COMMENT,"+ 
//				"uname char(10) NOT NULL UNIQUE KEY," + 
//				"upass varchar(16) NOT NULL)DEFAULT CHARSET=utf8";
//		m.upData(sql2);
//		//建立书单表
//		String sql3 = "CREATE TABLE bookList ("+
//				"uid int(6) NOT NULL PRIMARY KEY,"+ 
//				"bid int(6) NOT NULL UNIQUE KEY)DEFAULT CHARSET=utf8";
//		m.upData(sql3);
		//关闭连接
		m.closed();
	}

   
}
