<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>数组</title>
</head>

<body>
<?php
	//计算微秒数
	function hs(){
		list($wm,$sjc)=explode(' ',microtime());
		return $wm+$sjc;
	}
	
	$start_time=hs();//记录开始时间
	echo '你当前的位置为'.__FILE__.'<br/>时间为:'.date('Y-m-d h:m:s')."<hr/>\n";
	
	
	$array=array('h','e','l','l','o');
	$k='e';
	echo 'array_search()函数查找<br/>';
	$arraykey=array_search($k,$array);
	echo '位置是'.$arraykey.',值为'.$array[$arraykey];
	for($i=0;$i<=1000000;$i++)
	{
		
	}
	
	echo '<hr/>代码总共'.((__LINE__)+9).'行<br/>';
	$memorysize=round(memory_get_usage()/1024/1024,3).'MB';
	echo '执行占用内存'.$memorysize.'<br/>';
	$end_time=hs();//结束计时
	$hstime=round($end_time-$start_time,3);
	$hstime >=0.001 ? $hstime : $hstime='小于0.001';
	echo '本页面耗时'.$hstime.'秒<br/>';
?>
</body>
</html>