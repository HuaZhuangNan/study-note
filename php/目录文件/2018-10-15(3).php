<!doctype html>
<html>
<head>
<meta http-equiv="content-type" content="type=text/html;charset=utf-8" >
<title>目录和文件：路径-时间</title>
</head>

<body>
<?php
	$path = 'D:\PhpStudy\HuanJing\PHPTutorial\WWW\2018-10-15(3).php';
	echo 'basename()函数返回j绝对路径的文件名和扩展名<br/>';
	echo basename($path).'<hr/>';
	
	echo 'dirname()函数返回绝对路径部分<br/>';
	echo dirname($path).'<hr/>';
	
	echo 'pathinfo()函数返回文件所有数据成一个数组<br/>';
	print_r(pathinfo($path));
	echo '<hr/>';
	
	$path = './2018-10-15(3).php';
	echo 'realpath()相对路径转换成绝对路径<br/>';
	echo realpath($path).'<hr/>';
	
	$file = 'D:\PhpStudy\HuanJing\PHPTutorial\WWW\2018-10-15(3).php';
	echo 'filesize()返回文件字节数<br/>';
	echo filesize($file).'字节<br/>';
	echo 'round(filesize($file)/1024,2)返回文件KB数保留两位小数<br/>';
	echo round(filesize($file)/1024,2).'KB<hr/>';
	
	$file = 'D:';
	echo 'disk_free_space()返回磁盘剩余空间字节数<br/>';
	echo disk_free_space($file).'字节<br/>';
	echo 'round(disk_free_space($file)/1024/1024,2)返回磁盘剩余空间MB数保留两位小数<br/>';
	echo round(disk_free_space($file)/1024/1024,2).'MB<br/>';
	echo 'round(disk_free_space($file)/1024/1024/1024,2)返回磁盘剩余空间GB数保留两位小数<br/>';
	echo round(disk_free_space($file)/1024/1024/1024,2).'GB<hr/>';
	
	echo 'disk_total_space()返回磁盘总空间字节数<br/>';
	echo disk_total_space($file).'字节<br/>';
	echo 'round(disk_total_space($file)/1024/1024,2)返回磁盘总空间MB数保留两位小数<br/>';
	echo round(disk_total_space($file)/1024/1024,2).'MB<br/>';
	echo 'round(disk_total_space($file)/1024/1024/1024,2)返回磁盘总空间GB数保留两位小数<br/>';
	echo round(disk_total_space($file)/1024/1024/1024,2).'GB<hr/>';
	
	echo '已用多少直接减就可以了<hr/>';
	
	$file = 'D:\PhpStudy\HuanJing\PHPTutorial\WWW\2018-10-15(3).php';
	//调整下时区
	date_default_timezone_set('Asia/Shanghai');
	
	echo 'fileatime()返回文件最后访问时间，采用Unix时间戳格式<br/>';
	echo fileatime($file).'<br/>';
	echo '用date("Y-m-d h:i:s",fileatime())格式化下本地日期<br/>';
	echo date("Y-m-d h:i:s",fileatime($file)).'<hr/>';
	
	echo 'filectime()返回文件最后改变时间(所有者，权限)，采用Unix时间戳格式<br/>';
	echo filectime($file).'<br/>';
	echo '用date("Y-m-d h:i:s",filectime())格式化下本地日期<br/>';
	echo date("Y-m-d h:i:s",filectime($file)).'<hr/>';
	
	echo 'filemtime()返回文件最后修改时间（内容）采用Unix时间戳格式<br/>';
	echo filemtime($file).'<br/>';
	echo '用date("Y-m-d h:i:s",filemtime())格式化下本地日期<br/>';
	echo date("Y-m-d h:i:s",filemtime($file)).'<hr/>';
?>
</body>
</html>