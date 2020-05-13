<?php
/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-22 10:35:02
 * @version $Id$
 */
//创建一个对象
//$_mysqli = new mysqli(); 

//连接数据库 1，主机名(ip)，2，账户，3，密码，4，数据库
//mysqli_connect()函数 == $_mysql-> connect;
//$_mysqli->connect('localhost:3306','root','root','test');
//或者 
@$_mysqli = new mysqli('localhost:3306','root','root','test'); 

//屏蔽本身错误
//单独选择数据库$_mysqli = new mysqli('localhost:3306','root','root');
//这里选着的数据库会代替上面的数据库，一般程序就用一个数据库
//$_mysqli->select_db('test');


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

$_sql = "SELECT * FROM user";

//执行语句把结果赋值

$_result = $_mysqli -> query($_sql );


//数据库操作时发生的错误
if($_mysqli -> errno){
	echo '数据库操作错误'.$_mysqli -> error;
	exit();
}

//输出结果集
var_dump($_result);//一个对象，资源句柄
//输出结果第一行
echo '<br/>';
/*
print_r($_result -> fetch_row());
//输出第二行
echo '<br/>';
print_r($_result -> fetch_row());
echo '<hr/>';
//索引数组取值,但是下标不好记

$_row = $_result -> fetch_row();

echo $_row[1];
echo '<hr/>';
echo '<hr/>';

//关联数组取值好一点
while(!!$_assoc =  $_result -> fetch_assoc()){
	echo $_assoc['ID'].'<br/>';

}

//索引+关联数组
$_array = $_result ->fetch_array();
echo $_array['0'].'<br/>';
echo $_array['ID'].'<br/>';
*/

//使用OOP的方法object

while(!!$_object = $_result -> fetch_object()){

	echo $_object -> ID.'<br/>';
}


//最后释放内存
$_result ->free();


//断开数据库,或者myspli_close();
$_mysqli->close();
?>