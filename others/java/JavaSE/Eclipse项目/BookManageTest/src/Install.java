import java.util.Arrays;

public class Install {
//	//��װ���ݿ�
//	Install s = new Install();
//	s.sql();
//�½����ݱ�
	public void sql() {

		Mysql m = new Mysql("SQLServer","127.0.0.1","1433","HIMS","sa","rootygj","");
		//�������ݿ�
		m.getConn();
		//�����鼮��Ϣ��
		String sql = "CREATE TABLE bookInfo(id int auto_increment primary key not null,bname char(10) NOT NULL UNIQUE KEY,bauthor varchar(16))DEFAULT CHARSET=utf8";
		m.upData(sql);
//		//�����û���
//		String sql2 = "CREATE TABLE users ("+
//				"uid int(6) PRIMARY KEY COMMENT,"+ 
//				"uname char(10) NOT NULL UNIQUE KEY," + 
//				"upass varchar(16) NOT NULL)DEFAULT CHARSET=utf8";
//		m.upData(sql2);
//		//�����鵥��
//		String sql3 = "CREATE TABLE bookList ("+
//				"uid int(6) NOT NULL PRIMARY KEY,"+ 
//				"bid int(6) NOT NULL UNIQUE KEY)DEFAULT CHARSET=utf8";
//		m.upData(sql3);
		//�ر�����
		m.closed();
	}

   
}
