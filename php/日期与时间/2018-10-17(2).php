<!doctype html>
<html>
<head>
<meta http-equiv="content-type" content="type=text/html;charset=utf-8" />
<title>日期和时间</title>
</head>

<body>
<?php
	//header start
	//设置当前时区
	date_default_timezone_set('Asia/ShangHai');
	//计算微秒数
	function hs(){
		list($wm,$sjc)=explode(' ',microtime());
		return $wm+$sjc;
	}
	$start_time=hs();//记录开始时间
	//echo date_default_timezone_get();获取当前时区
	//putenv();配置时区用得少
	echo '你当前的位置为'.__FILE__.'<br/>时间为:'.date('Y-m-d h:m:s')."<hr/>\n";
	//end header 
	
	//body start
	echo '当前时间戳:'.time();//当前时间戳
	echo '<br/>2018-8-8 08:08:08时间戳mktime():'.mktime(8,8,8,8,8,2018);//指定日期戳
	echo "\n<br/>date()格式化验证下".date('Y-m-d h:m:s',mktime(8,8,8,8,8,2018));//时间戳相减就是相差秒数
	echo '<br/>2018-8-8 08:08:08时间戳strtotime(字符串)更好用:'.strtotime('2018-8-8 08:08:08');//指定日期戳
	echo "\n<br/>date()格式化验证下".date('Y-m-d h:m:s',strtotime('2018-8-8 08:08:08'));//时间戳相减就是相差秒数
	
	echo 'localtime()当前时间的信息,返回数组:';//
	print_r(localtime(time(),true));//当前时间以数组返回
	//end body 
	//可以用<a></a>get方式获取get值
	//footer start 
	echo '<hr/>代码总共'.((__LINE__)+9).'行<br/>';
	$memorysize=round(memory_get_usage()/1024/1024,3).'MB';
	echo '执行占用内存'.$memorysize.'<br/>';
	$end_time=hs();//结束计时
	$hstime=round($end_time-$start_time,3);
	$hstime >=0.001 ? $hstime=$hstime : $hstime='小于0.001';
	echo '本页面耗时'.$hstime.'秒<br/>';
	//end footer
?>
</body>
</html>