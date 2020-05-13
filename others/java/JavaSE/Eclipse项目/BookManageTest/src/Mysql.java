import java.sql.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.regex.Pattern;

public class Mysql{
	
    private Connection conn=null;

    private String dbUrl=null,Name=null,Pass=null;
    
    //初始化并注册JDBC驱动
	public Mysql(String jdbc,String url,String port,String stock,String Name,String Pass,String encode) {
		if(jdbc ==null || stock==null || Name==null || Pass==null) {
			System.out.println("传的参数出错！");
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
				default: System.out.println("jdbc传的参数出错！"); return; 
			}
			try
			 {
				Class.forName(jdbc);
				//System.out.println("注册JDBC驱动成功");
			 }catch(Exception e){
				 e.printStackTrace();
				 //System.out.println("注册JDBC驱动失败！");
		    }
		}
	}
	//连接数据库
	public Connection getConn() {
		try
		 {
			conn = DriverManager.getConnection(dbUrl,Name,Pass);
			System.out.println("数据库链接成功");
		 }catch(SQLException e){
			e.printStackTrace();
			System.out.println("数据库链接失败！");
	    }
		return conn;
	}
	//获取数据集 字段数组filed[] 和 表 数组table[] 查询条件 和 值 值可以扩展为 value
	//getDate 返回二维数组 
	public String[][] getData(String[] fields,String endSql) {
		ResultSet rs=null;
		PreparedStatement psmt=null;
	    Statement stmt=null;
		String sql=null,field=null;
		if(fields!=null) {
			field = toStr(fields,"",",");
			sql = "SELECT "+field+" FROM "+endSql;
		}else {
			System.out.println("不可以为空");
			return null;
		}
		try {
			Pattern p = Pattern.compile("where",Pattern.CASE_INSENSITIVE);
			if(fields[0]=="*" || p.matcher(endSql).find()==false) { //* where
				//滚动集
				//System.out.println(" 实例化prepareStatement对象,并执行语句");
				psmt = conn.prepareStatement(sql,ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
				rs = psmt.executeQuery();
			}else {
				//System.out.println(" 实例化Statement对象,并执行语句");
				stmt = conn.createStatement();
		        rs = stmt.executeQuery(sql);
			}
			//获取结果集的元素个数
			ResultSetMetaData rsmd=null; 
			rsmd = rs.getMetaData(); 
			int colCount = rsmd.getColumnCount();
			ArrayList<String []> datas = new ArrayList<String []>();
			while(rs.next()) {
				String [] info= new String[colCount];//防止覆盖
				for(int i=0;i< colCount;i++){
					info[i]=rs.getString(i+1);
				}
				datas.add(info);
			}
			// 完成后关闭
			if(psmt!=null)psmt.close();
			if(stmt!=null)stmt.close();
			rs.close();
			if(datas.size()== 0) {
				return null;
			}
			//String[][] data = datas.toArray(new String[datas.size()][colCount]);//出错
			return datas.toArray(new String[datas.size()][colCount]);
		} catch (SQLException e) {
			//获取失败
			e.printStackTrace();
		}
		return null;
	}
	//executeQuery
	
	//upDate 语句
	public 	int upData(String sql) {
		int rows=0;
		PreparedStatement stmt=null;
		if(sql==null) {
			System.out.println("语句为空");
		}
		//生成一条mysql语句
		try {     
			stmt = conn.prepareStatement(sql);//创建一个Statement对象
			rows = stmt.executeUpdate();//执行sql语句返回行数
	        // 完成后关闭
            stmt.close();
		}catch (SQLException e) {
			e.printStackTrace();
			return rows;
		}
		return rows;//成功
	}
	//添加数据 数组必须一一对应
	public void addData(String[] tables,String[] fields,String[] values) {
		int rows=0;
		String table=null,field=null,value=null;
		//检查数据
		if(fields==null || values==null) {
			System.out.println("传的参数出错！");
		}
		//拼接数据
		table = toStr(tables,"",",");
		field = toStr(fields,"",",");
		value = toStr(values,"'","',");
		//执行语句
		rows = this.upData("INSERT INTO "+table+",("+field+") VALUES("+value+")");
		if(rows>0) {
			System.out.println("插入到数据库成功!影响"+rows+"行");
		}else {
			System.out.println("插入到数据库失败!");
		}
	}
	//修改数据
	public void setData(String[] tables,String[] fields,String[] values,String endSql) {
		int rows=0;
		String table=null,sql=null;
		//检查数据
		if(fields==null || values==null || endSql==null) {
			System.out.println("传的参数出错！");
		}
		//拼接数据
		sql=toStr(fields,"=",values); 
		table = toStr(tables,"",",");

		//执行语句
		rows = this.upData("UPDATA "+table+" SET "+sql+" WHERE "+endSql);
		if(rows>0) {
			System.out.println("修改数据成功!影响"+rows+"行");
		}else {
			System.out.println("修改数据失败!");
		}
	}
	//删除数据
	public void deData(String table,String endSql) {
		int rows=0;
		//检查数据
		if(table==null || endSql==null) {
			System.out.println("传的参数出错！");
		}
		//执行语句
		rows = this.upData("DELETE FROM"+table+" WHERE "+endSql);
		if(rows>0) {
			System.out.println("删除数据成功!影响"+rows+"行");
		}else {
			System.out.println("删除数据失败!");
		}
	}
	
	//关闭连接
	public void closed() {
		try {
			if(conn!=null)conn.close();
		} catch (SQLException e) {
			System.out.println("关闭失败！");
			e.printStackTrace();
		}
	}
	
	//工具 数组转换成按特定符号的字符串
	public static String toStr(String[] arr,String start,String end) {
		StringBuffer sb = new StringBuffer();
		String str;
		if(arr==null) {
			System.out.println("传入的参数有问题");
			return null;
		}
		for(int i = 0; i < arr.length; i++){
			sb.append(start+arr[i].trim()+end);
		}  
		str = sb.toString();
		str = str.substring(0,str.length() - 1);//去尾巴逗号
		return str;
	}
	//两个数组转换成按特定符号相连的字符串
	public static String toStr(String[] arr,String sign,String[] arr2) {
		StringBuffer sb = new StringBuffer();
		String str;
		if(arr==null || arr2==null || arr.length != arr2.length) {
			System.out.println("传入的参数有问题");
			return null;
		}
		for(int i = 0; i < arr.length; i++){
			sb.append(arr[i].trim()+sign+arr2[i].trim());
		}  
		str = sb.toString();
		str = str.substring(0,str.length() - 1);//去尾巴逗号
		return str;
	}

}
