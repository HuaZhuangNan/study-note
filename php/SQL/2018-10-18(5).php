<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>MYSQL链接</title>
</head>
<body>
<?php 
	/*
		考虑要建模的实际对象
		避免保存多余数据
		使用原子列数
		考虑需要询问数据库的问题
		避免多个空属性设计
		
		@关闭警告错误信息
	*/
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
	 mysql_query('Set names UFT8');
	//sql功能语句
	$sql_table_name='php';//特定数据的数据库表
	
	$query = 'Select * from '.$sql_table_name;
	$result = @mysql_query($query,$linksql);
	
	if(!$result){
		echo '命令执行失败,错误信息:'.mysql_error().'<br/>';
	}
	else{
		echo '命令执行成功:'.$result.'<br/>';
	}
	//记录集数据输出，如果有就为真
	$i=0;
	while($row = mysql_fetch_array($result,MYSQL_ASSOC)){
			if(!$row){
				--$i;
				echo '查询失败，错误信息:'.mysql_error().'<br/>';
			}
			else{
				echo '查询成功：';
				++$i;
				print_r($row);
				echo '<br/>';
			}	
		};
		echo '查询成功：总共'.$i.'数据</br>';
	
	//释放记录集资源
	$sql_result = mysql_free_result($result);
	if(!$sql_result ){
		echo '释放失败，错误信息:'.mysql_error().'<br/>';
	}
	else{
		echo '释放数据库成功<br/>';
	}
	
	//关闭sql
	$sqlclose = @mysql_close($linksql);
	if(!$sqlclose){
		echo '链接失败,错误信息:'.mysql_error().'<br/>';
	}
	else{
		echo '关闭数据库成功:'.$mysql_host.'<br/>';
	}
?>
</body>
</html>