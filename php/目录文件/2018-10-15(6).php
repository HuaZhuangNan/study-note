<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>目录操作</title>
</head>

<body> 
<?php
    //新建目录
	echo 'mkdir($path, $mode, true)创建目录true/false<hr/>';
	$path='./123';
	$mode='0777';//权限
    mkdir($path,$mode);
	//打开
	echo 'opendir()打开目录流<hr/>';
	$dir =opendir($path);
	//读出目录
	echo 'readdir()读取目录，指针一个个来</br>';
	while(!!$file = readdir($dir)){
		echo $file.'<br/>';
	}
	echo '<hr/>scandir()把目录读入一个数组<br/>';
	print_r(scandir($path));
	
	echo '<hr/>rename()重命名文件或目录<br/>';
	$newpath ='./985';
	rename($path,$newpath);
	
	echo '<hr/>rmdir()删除目录或文件<br/>';
	rmdir($newpath);
	//关闭
	echo '<hr/>closedir关闭目录流';
	closedir($dir); 
?>
</body>
</html>