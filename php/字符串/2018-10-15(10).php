<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>字符串查找替换</title>
</head>

<body>

<?php
	@header("content-Type: text/html; charset=utf-8"); //语言强制
	echo '当前路径：'.__FILE__.'<hr/>';
	
	echo 'strstr()和strchr()返回查找字符第一个出现（左到右）开始之后的数据';
	echo '</br>strstr的结果为：'.strstr('2382@52568@qq.com','@');
	echo '</br>strchar的结果为：'.strchr('2382@52568@qq.com','@');
	echo '<hr/>';
	
	echo 'strpos()返回查找字符第一个出现（左到右）的位置';
	echo '</br>strpos的结果为：'.strpos('2382@52568@qq.com','@');
	echo '<hr/>';
	
	echo 'strpos返回查找字符最后出现（左到右）的位置';
	echo '</br>strrpos的结果为：'.strrpos('2382@52568@qq.com','@');
	echo '<hr/>';
	
	echo 'str_replace()@替换成#,str_ireplace()不区分大小写,数组也可以直接替换';
	echo '</br>str_replace的结果为：'.str_replace('@','#','2382252@568@qq.com');
	echo '<hr/>';
	
	echo 'substr_replace()从第二个位置取出5个字符替换成#';
	echo '</br>substr_replace的结果为：'.substr_replace('2382252@568@qq.com','替换的',1,5);
	echo '<hr/>';
	
	echo '<hr/>代码：'.__LINE__.'行';
?>

</body>
</html>