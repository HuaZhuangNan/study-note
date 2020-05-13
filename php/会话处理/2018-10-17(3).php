<!doctype html>
<html>
<head>
<meta http-equiv="content-type" content="type=text/html;charset=utf-8" />
<title>表单和验证</title>
</head>
<form action="#" method="post">
	<lable for="name">姓名<lable>
    	<input id="name" name="name" autocomplete="off" type="text" placeholder="请输入你的名字"/>
	<input name="sub" value="提交" type="submit">
</form>
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
	echo '<hr/>你当前的位置为'.__FILE__.'<br/>时间为:'.date('Y-m-d h:m:s')."<hr/>\n";
	//end header 
	
	//body start
	echo 'header()重新导向';
	//header('Location:2018-10-17(3).php');
	header('COontent-type:text/html;charset:utf-8;');
	echo '在执行header()函数之前浏览器不可以有输出<hr/>';
	if(isset($_POST['sub']) && $_POST['sub']=='提交'){
		$name=$_POST[ 'name'];
		echo '表单传的值：'.$name;
	//为了页面安全性 清除空格 => 防止解析为html =>计算长度
		$name=trim($name);
		echo '<br>清除空格后值为'.$name;
		$name=htmlspecialchars($name);
		echo "</br>防止解析后值为：".$name;
		echo "</br>计算变量长度：".strlen($name);
		//is_numeric()用户名必须纯数字
	//js -- history.back();表示退回上一个页面
	}
	//empty()变量是否为空
	//end body 
	
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