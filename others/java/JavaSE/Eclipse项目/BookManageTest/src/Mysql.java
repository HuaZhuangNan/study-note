import java.sql.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.regex.Pattern;

public class Mysql{
	
    private Connection conn=null;

    private String dbUrl=null,Name=null,Pass=null;
    
    //��ʼ����ע��JDBC����
	public Mysql(String jdbc,String url,String port,String stock,String Name,String Pass,String encode) {
		if(jdbc ==null || stock==null || Name==null || Pass==null) {
			System.out.println("���Ĳ�������");
		}else {
			url = (url != null) ? url : "127.0.0.1";//localhost
			this.Name = Name;
			this.Pass = Pass;
			switch(jdbc) {
				case "MySQL": 
					jdbc = "com.mysql.jdbc.Driver";
					port = (port != null) ? port : "3306";
					encode = (port != null) ? port : "utf-8";
					this.dbUrl = "jdbc:mysql://"+url+":"+port+"/"+stock+"?useSSL=false&&serverTimezone=UTC&useUnicode=true&characterEncoding="+encode;
				break;
				case "SQLServer": 
					jdbc = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
					port = (port != null) ? port : "1433";
					this.dbUrl = "jdbc:sqlserver://"+url+":"+port+";DatabaseName="+stock;
				break;
				default: System.out.println("jdbc���Ĳ�������"); return; 
			}
			try
			 {
				Class.forName(jdbc);
				//System.out.println("ע��JDBC�����ɹ�");
			 }catch(Exception e){
				 e.printStackTrace();
				 //System.out.println("ע��JDBC����ʧ�ܣ�");
		    }
		}
	}
	//�������ݿ�
	public Connection getConn() {
		try
		 {
			conn = DriverManager.getConnection(dbUrl,Name,Pass);
			System.out.println("���ݿ����ӳɹ�");
		 }catch(SQLException e){
			e.printStackTrace();
			System.out.println("���ݿ�����ʧ�ܣ�");
	    }
		return conn;
	}
	//��ȡ���ݼ� �ֶ�����filed[] �� �� ����table[] ��ѯ���� �� ֵ ֵ������չΪ value
	//getDate ���ض�ά���� 
	public String[][] getData(String[] fields,String endSql) {
		ResultSet rs=null;
		PreparedStatement psmt=null;
	    Statement stmt=null;
		String sql=null,field=null;
		if(fields!=null) {
			field = toStr(fields,"",",");
			sql = "SELECT "+field+" FROM "+endSql;
		}else {
			System.out.println("������Ϊ��");
			return null;
		}
		try {
			Pattern p = Pattern.compile("where",Pattern.CASE_INSENSITIVE);
			if(fields[0]=="*" || p.matcher(endSql).find()==false) { //* where
				//������
				//System.out.println(" ʵ����prepareStatement����,��ִ�����");
				psmt = conn.prepareStatement(sql,ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
				rs = psmt.executeQuery();
			}else {
				//System.out.println(" ʵ����Statement����,��ִ�����");
				stmt = conn.createStatement();
		        rs = stmt.executeQuery(sql);
			}
			//��ȡ�������Ԫ�ظ���
			ResultSetMetaData rsmd=null; 
			rsmd = rs.getMetaData(); 
			int colCount = rsmd.getColumnCount();
			ArrayList<String []> datas = new ArrayList<String []>();
			while(rs.next()) {
				String [] info= new String[colCount];//��ֹ����
				for(int i=0;i< colCount;i++){
					info[i]=rs.getString(i+1);
				}
				datas.add(info);
			}
			// ��ɺ�ر�
			if(psmt!=null)psmt.close();
			if(stmt!=null)stmt.close();
			rs.close();
			if(datas.size()== 0) {
				return null;
			}
			//String[][] data = datas.toArray(new String[datas.size()][colCount]);//����
			return datas.toArray(new String[datas.size()][colCount]);
		} catch (SQLException e) {
			//��ȡʧ��
			e.printStackTrace();
		}
		return null;
	}
	//executeQuery
	
	//upDate ���
	public 	int upData(String sql) {
		int rows=0;
		PreparedStatement stmt=null;
		if(sql==null) {
			System.out.println("���Ϊ��");
		}
		//����һ��mysql���
		try {     
			stmt = conn.prepareStatement(sql);//����һ��Statement����
			rows = stmt.executeUpdate();//ִ��sql��䷵������
	        // ��ɺ�ر�
            stmt.close();
		}catch (SQLException e) {
			e.printStackTrace();
			return rows;
		}
		return rows;//�ɹ�
	}
	//������� �������һһ��Ӧ
	public void addData(String[] tables,String[] fields,String[] values) {
		int rows=0;
		String table=null,field=null,value=null;
		//�������
		if(fields==null || values==null) {
			System.out.println("���Ĳ�������");
		}
		//ƴ������
		table = toStr(tables,"",",");
		field = toStr(fields,"",",");
		value = toStr(values,"'","',");
		//ִ�����
		rows = this.upData("INSERT INTO "+table+",("+field+") VALUES("+value+")");
		if(rows>0) {
			System.out.println("���뵽���ݿ�ɹ�!Ӱ��"+rows+"��");
		}else {
			System.out.println("���뵽���ݿ�ʧ��!");
		}
	}
	//�޸�����
	public void setData(String[] tables,String[] fields,String[] values,String endSql) {
		int rows=0;
		String table=null,sql=null;
		//�������
		if(fields==null || values==null || endSql==null) {
			System.out.println("���Ĳ�������");
		}
		//ƴ������
		sql=toStr(fields,"=",values); 
		table = toStr(tables,"",",");

		//ִ�����
		rows = this.upData("UPDATA "+table+" SET "+sql+" WHERE "+endSql);
		if(rows>0) {
			System.out.println("�޸����ݳɹ�!Ӱ��"+rows+"��");
		}else {
			System.out.println("�޸�����ʧ��!");
		}
	}
	//ɾ������
	public void deData(String table,String endSql) {
		int rows=0;
		//�������
		if(table==null || endSql==null) {
			System.out.println("���Ĳ�������");
		}
		//ִ�����
		rows = this.upData("DELETE FROM"+table+" WHERE "+endSql);
		if(rows>0) {
			System.out.println("ɾ�����ݳɹ�!Ӱ��"+rows+"��");
		}else {
			System.out.println("ɾ������ʧ��!");
		}
	}
	
	//�ر�����
	public void closed() {
		try {
			if(conn!=null)conn.close();
		} catch (SQLException e) {
			System.out.println("�ر�ʧ�ܣ�");
			e.printStackTrace();
		}
	}
	
	//���� ����ת���ɰ��ض����ŵ��ַ���
	public static String toStr(String[] arr,String start,String end) {
		StringBuffer sb = new StringBuffer();
		String str;
		if(arr==null) {
			System.out.println("����Ĳ���������");
			return null;
		}
		for(int i = 0; i < arr.length; i++){
			sb.append(start+arr[i].trim()+end);
		}  
		str = sb.toString();
		str = str.substring(0,str.length() - 1);//ȥβ�Ͷ���
		return str;
	}
	//��������ת���ɰ��ض������������ַ���
	public static String toStr(String[] arr,String sign,String[] arr2) {
		StringBuffer sb = new StringBuffer();
		String str;
		if(arr==null || arr2==null || arr.length != arr2.length) {
			System.out.println("����Ĳ���������");
			return null;
		}
		for(int i = 0; i < arr.length; i++){
			sb.append(arr[i].trim()+sign+arr2[i].trim());
		}  
		str = sb.toString();
		str = str.substring(0,str.length() - 1);//ȥβ�Ͷ���
		return str;
	}

}
