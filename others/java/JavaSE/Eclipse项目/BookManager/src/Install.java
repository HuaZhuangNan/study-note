public class Install {
	private MySQL m=null;
	
	public Install() {
		m = new MySQL("MySQL","127.0.0.1","3306","mysql","root","rootygj","utf-8");
		//�������ݿ�
		m.getConn();
	}
	public void creTable() {
//		//������
//		String sql = "DROP DATABASE 'Bookmanager' ";
//		m.upData(sql);
		//�����鼮��Ϣ��
		String sql1 = "create table bookInfo(" + 
				"ISBN integer primary key," + 
				"name varchar(20)," + 
				"author varchar(30)," + 
				"publisher varchar(50))";
		m.upData(sql1);
		//�����û���
		String sql2 = "create table users(" + 
				"id integer primary key," + 
				"accountID varchar(20), "+ 
				"accountPWD varchar(20))";
		m.upData(sql2);
		//�����鵥��
		String sql3 = "create table bookList("+
				"id integer primary key,"+
				"bookISBN integer)";
		m.upData(sql3);
		//�ر�����
		if(m!=null)m.closed();
		System.out.println("�����ɹ�!");
	}
	public void deTable() {
		//�����鼮��Ϣ��
		String sql = "DROP TABLE bookInfo";
		m.upData(sql);
		//�����û���
		String sql2 = "DROP TABLE users";
		m.upData(sql2);
		//�����鵥��
		String sql3 = "DROP TABLE bookList";
		m.upData(sql3);
		
		//�ر�����
		if(m!=null)m.closed();
		
		System.out.println("ɾ���ɹ�!");
	}
	
}


