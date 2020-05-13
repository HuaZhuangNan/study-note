<?php
/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-22 11:59:37
 * @version $Id$
 */

//创建一个对象
//连接数据库 1，主机名(ip)，2，账户，3，密码，4，数据库
@$_mysqli = new mysqli('localhost:3306','root','root','test'); 
//屏蔽本身错误

//错误处理

//链接出错就是对象未建立成功，没有句柄能力
//函数捕捉,用对象是错误不可以的，应为对象没有建立成功
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
//看看有多少行
echo $_result -> num_rows.'<br/>';
//看看影响了几行
echo $_mysqli -> affected_rows.'<br/>';

//打印数据库有几个字段,根据执行语句
echo $_result ->field_count.'<br/>';

//获取字段名字和属性

while(!!$_field = $_result ->fetch_field()){

	echo $_field -> name.'<br/>';
}
echo "<hr/>";
//直接一次性获取字段名,返回数组
$_fields = $_result ->fetch_fields();
foreach ($_fields as $field ) {
	echo $field -> name.'<br/>';
}
//最后释放内存
$_result ->free();
//断开数据库,或者myspli_close();
$_mysqli->close();
?>