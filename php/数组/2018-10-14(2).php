<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
<title>数组</title>
</head>

<body>
<?php
  @header("content-Type: text/html; charset=utf-8"); //语言强制
// 最后修改时间：2018年10月14日23:09:06
	$a =array("one","two","there");
	if(is_array($a))
		echo '是数组';
	echo '<br/>';
	print_r($a);
	echo '<br/>';
	
	//range()指定单元数值字和字母数组
	$b = range(1,4);
	print_r($b);
	echo '<br/>';
	
	$c = range('a','d');
	print_r($c);
	echo '<br/>';
	
	$d = range('A','D');
	print_r($d);
	echo '<br/>';
	//计算数组值个数 count()
	echo "数组个数为".count($a)."<br/>";
	//循环遍历(最好先判断下是不是数组变量)
	foreach($a as $value){
		echo $value."</br>";
	}
	echo "</br>";
	foreach($a as $key => $value){
		echo $key."值:".$value."</br>";
	}
	echo "</br>";
	//自建key'数组，each()将第一个键值对获取到，然后包装返回,并且数组指针加一位
	$e = array("one"=>"一","two"=>"二");
	print_r(each($e));
	echo "</br>";
	//相当于 $f=array( 0=> "one",1 => "一","value" => "一","key" => "one");
	$f =each($e);
	print_r($f);
	echo "</br>";
	// !! 两个感叹号转换布尔值1或者无数据返回
	$g = array("one"=>"一","two"=>"二");
	while(!!$h=each($g)){
		echo $h["key"]."=>".$h["value"]."</br>";
	}
	//list()把数组的值赋值给一些变量,只认识下标为数字的
	$i = array("one","two","there","four");
	list($var1,$var2)=$i;
	echo $var1;
	echo "</br>";
	//不过可以用each();
	$j = array("one"=>"一","two"=>"二");
	list($var1,$var2)=each($j);
	echo $var1."=>".$var2;
	echo "</br>";
	//全部打印出来
	while(!!list($var1,$var2)=each($j)){
		echo $var1."=>".$var2."</br>";
	}
	//reset($j);指针指数值向第一单元
	//array_unique();移除重复的值返回一个数组，旧的数组不改变
	//array_flip();交换数组键值和值的位置返回一个数组，旧的数组不改变
?>
</body>
</html>