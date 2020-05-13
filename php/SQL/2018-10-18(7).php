<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>MYSQL链接</title>
</head>
<body>
<?php 
	header('Content-Type:text/html;charset:utf-8;');
	
	$mysql_host='localhost';
	$mysql_dk='3306';
	$mysql_name='root';
	$mysql_pass='root';
	
	$mysql_db_name='test';
	
	//连接数据库，服务器地址，服务器用户名，服务器密码
	$linksql = @mysql_connect($mysql_host.':'.$mysql_dk,$mysql_name,$mysql_pass);
	if(!$linksql){
		echo '链接失败,错误信息:'.mysql_error().'<br/>';
	}
	else{
		echo '链接成功,数据库:'.$mysql_host.'<br/>';
	}
	
	//连接特定数据库
	$linkdb = @mysql_select_db($mysql_db_name,$linksql);
	if(!$linkdb){
		echo '链接失败,错误信息:'.mysql_error().'<br/>';
	}
	else{
		echo '链接特定数据库成功:'.$mysql_db_name.'<br/>';
	}
	//设置字符集编码
	 mysql_query('Set Names UFT8');
	//sql功能语句
	echo '客户端信息:'.mysql_get_client_info().'<br/>';
	echo '主机信息:'.mysql_get_host_info().'<br/>';
	echo '协议信息:'.mysql_get_proto_info().'<br/>';
	echo '服务器信息:'.mysql_get_server_info().'<br/>';
	$sql_table_name='php';//特定数据的数据库表
	$query = 'Select * From '.$sql_table_name;
	
	$result = @mysql_query($query,$linksql);
	if(!$result){
		echo '命令执行失败,错误信息:'.mysql_error().'<br/>';
		exit;
		//或者用 die()
	}
	else{
		echo '命令执行成功:'.$result.'<br/>成功改变数据'.$query.'<br/>';
		echo 'mysql_fetch_row()取结果中的一行作为枚举数组<br/>';
		print_r(mysql_fetch_row($result));//取结果中的一行作为枚举数组
		echo '<br/>';
		echo 'mysql_fetch_array()取结果中的一行作为关联数组,或二者兼有<br/>';
		print_r(mysql_fetch_array($result));//取结果中的一行作为关联数组,或二者兼有
		echo '<br/>';
	}
	
	
	//关闭sql
	$sqlclose = @mysql_close($linksql);
	if(!$sqlclose){
		echo '链接失败,错误信息:'.mysql_error().'<br/>';
	}
	else{
		echo '关闭数据库成功:'.$mysql_host.'=>'.$mysql_db_name.'<br/>';
	}
?>
</body>
</html>
</body>
</html>