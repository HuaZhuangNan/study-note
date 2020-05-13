<!doctype html>
<html>
<head>
<meta http-equiv="content-type" content="type=text/html;charset=utf-8" />
<title>日期和时间</title>
</head>

<body>
<?php
	echo '当期目录'.__FILE__.'<hr/>';
	$month='15';
	$day='16';
	$year='2018';
	echo 'checkdata()函数验证时间数据合法性<br/>';
	echo checkdate($month,$day,$year).'结果';
	echo '<hr/>';
	
	echo 'data(,)格式化时间函数,第一个格式化，第二个时间戳（可选）<br/>';
	//明明是19点咋是11点，因为没设置时间
	echo date('当前时间: Y-m-d H:i:s a l 时间戳 U');
	echo '<hr/>';
	 
	echo 'gettimeofday(,)格式化时间函数,第一个格式化，第二个时间戳（可选）<br/>';
	print_r(gettimeofday());//返回当前时间的时间戳和微秒数还有----
	echo '<hr/>';

	echo 'getdate(,)格式化时间戳,返回一个数组<br/>';
	print_r(getdate(1539689530));//返回当前时间的时间戳和微秒数还有----
	
	echo '<hr/>当期第'.__LINE__.'行';
?>

</body>
</html>