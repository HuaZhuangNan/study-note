<?php
/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-22 12:29:26
 * @version $Id$
 */
//创建一个对象
//连接数据库 1，主机名(ip)，2，账户，3，密码，4，数据库
@$_mysqli = new mysqli('localhost:3306','root','root','test'); 
//屏蔽本身错误
//数据库连接错误处理
if(mysqli_connect_errno()){
	echo '数据库链接错误'.mysqli_connect_error();//
	exit();//错误就直接啐出不执行
}// 0 表示无错误
//读取数据

//设置编码
$_mysqli->set_charset('utf8');
//创建查询语句,查询user表
$_sql = "SELECT * FROM user limit 1,2";//从第二行里面取2条
//执行语句把结果赋值给集 
$_result = $_mysqli -> query($_sql );
//数据库操作时发生的错误
if($_mysqli -> errno){
	echo '数据库操作错误'.$_mysqli -> error;
	exit();
}
//移动数据指针
$_result -> data_seek(2);
$_row = $_result ->fetch_row();
echo $_row[1].'<br/>';//Name字段

//移动字段指针
$_result -> field_seek(1);
$_field = $_result -> fetch_field();
echo $_field -> name;



?>