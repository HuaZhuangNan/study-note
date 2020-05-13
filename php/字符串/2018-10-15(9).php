<!doctype html>
<html>
<head>
<meta http-equiv="content-type" content="type=text/html charset=utf-8" />
<title>字符串比较</title>
</head>

<body>
<?php
	@header("content-Type: text/html; charset=utf-8"); //语言强制
	echo '当前路径：'.__FILE__.'<hr/>';
	
	echo '==比较返回布尔值<br/>';
	echo ('a'=='a').'<hr/>';
	
	echo 'strcmp()比较返回前比后小（-1）,0,1区分大小写<br/>';
	echo strcmp('B','b').'<hr/>';
	
	echo 'strcasecmp()比较返回-1,0,1不区分大小写<br/>';
	echo strcasecmp('B','b').'<hr/>';
	
	echo 'strnatcmp()按自然字符比较返回-1,0,1<br/>';
	echo strnatcmp('2','10').'<hr/>';
	
	echo 'strspn()求字符串的重复个数，无则0<br/>';
	echo strspn('th','ththhtjkg',0,6).'<hr/>';//最后是可选参数，0的位置开始位，取个数6
	
	echo 'strlen()返回字复查个数，无则0<br/>';
	echo strlen('ththhtjkg').'<hr/>';
	
	echo 'substr_count()返回只出现的频繁率，无则0<br/>';
	echo  substr_count('ththhtjkg').'<hr/>';
	
	
	
	echo '<hr/>代码：'.__LINE__.'行';
?>
</body>
</html>