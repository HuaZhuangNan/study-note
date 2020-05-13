<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>文件读取二</title>
</head>

<body>
<?php
	$filename='demo.php';
	
	echo 'file_exists()判断文件是否存在!以及大小<br/>';
	if(file_exists($filename)){
		echo $filename.'文件存在,大小为:'.round(filesize($filename)/1024,2).'KB';
	}
	else{
		echo $filename.'文件不存在';
	}
	echo '<hr/>';
	echo 'file()按每行来存放数组<br/>';
	$array_file=file($filename);
	echo '数据组<br/>';
	print_r($array_file);
	echo '</br>第一行数据<br/>';
	echo $array_file[0];
	echo '<hr/>';
	
	echo 'readfile()整个文件读取到输出缓存，返回文件字符字节数<br/>';
	readfile($filename);
	echo '<hr/>';
	
	echo 'file_get_contents整个文件读取到缓存区，返回文件内容<br/>';
	echo file_get_contents($filename);
	
	echo '<hr/>unlink()删除文件<br/>';
	$filename2 ='123.txt';
	if(unlink($filename2)){
		echo $filename2.'文件删除成功';
	}
	else{
		echo $filename2.'文件删除失败';
	}
	
	echo '<hr/>';
	
	
?>
</body>
</html>