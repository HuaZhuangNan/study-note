package mySQL;

import java.sql.*;

public class connect {

public static void main(String[] args) {
	 String driverName="com.microsoft.sqlserver.jdbc.SQLServerDriver";//SQL���ݿ�����
	 String dbURL="jdbc:sqlserver://127.0.0.1:1433;DatabaseName=HIMS;";//����Դ  ��������ע�������ּ��ػ����������ݿ�ʧ��һ���������������
	 String Name="sa";
	 String Pwd="rootygj";
	 try
	 {
		 Class.forName(driverName);
		 Connection conn=DriverManager.getConnection(dbURL,Name,Pwd);
		 System.out.println("�������ݿ�ɹ�");
	 }catch(Exception e){
		 e.printStackTrace();
		 System.out.println("����ʧ��");
     }
   }

}