<!doctype html>
<html>
<head>
<meta http-equiv="content-type" content="type=text/html;charset=utf-8" /> 
<title>数组排序</title>
</head>

<body>
<?php
	@header("content-Type: text/html; charset=utf-8"); //语言强制
	//sort()按字母小到大排序，中文首字母小到大排序，数字小到大排序;排序成功返回1，下标改变，反向就是rsort();
	$a=array(22,5,9,44,6,8);
	echo sort($a);
	echo '<br/>默认排序--&nbsp;';
	print_r($a);
	
	echo '<br/>按数字排序--&nbsp;';
	$a=array(22,5,9,44,6,8);
	sort($a,SORT_NUMERIC);//单元作为数字来比较
	print_r($a);
	
	echo '<br/>作为字符串排序--&nbsp;';
	$a=array(22,5,9,44,6,8);
	sort($a,SORT_STRING);//单元作为字符串来比较,只是比较第一步
	print_r($a);
	
	echo '<hr/>';
	//asort();会保持索引关系，就是下标标对应不改变,反向就是arsort();
	$a=array(22,5,9,44,6,8);
	echo asort($a);
	echo '<br/>默认排序--&nbsp;';
	print_r($a);
	
	echo '<br/>按数字排序--&nbsp;';
	$a=array(22,5,9,44,6,8);
	asort($a,SORT_NUMERIC);
	print_r($a);
	
	echo '<br/>作为字符串排序--&nbsp;';
	$a=array(22,5,9,44,6,8);
	asort($a,SORT_STRING);
	print_r($a);
	
	echo '<hr/>';
	//按key值，键值排序，反向就是krsort();
	$b=array('a'=>"one",'d'=>"four",'c'=>"there",'b'=>"two",'e'=>"five");
	echo ksort($b);
	echo '<br/>默认排序--&nbsp;';
	print_r($b);
	
	echo '<br/>按数字排序--&nbsp;';
	$b=array('a'=>"one",'d'=>"four",'c'=>"there",'b'=>"two",'e'=>"five");
	ksort($b,SORT_NUMERIC);
	print_r($b);
	
	echo '<br/>作为字符串排序--&nbsp;';
	$b=array('a'=>"one",'d'=>"four",'c'=>"there",'b'=>"two",'e'=>"five");
	ksort($a,SORT_STRING);
	print_r($b);
	
	echo '<hr/>';
	//array_reverse()按值反向排序返回数组，原来数组不变
	$b = array('a'=>"one",'d'=>"four",'c'=>"there",'b'=>"two",'e'=>"five");
	$c = array_reverse($b);
	echo '<br/>反向排序返回数组，原来数组不变--&nbsp;';
	print_r($c);
	
	echo '<hr/>';
	//shuffle()数组随机排序，比如随机图片建立
	$phots  = array('1.png','2.png','3.png','4.png','5.png');
	echo shuffle($phots).'</br>';
	foreach($phots as $value){
		echo '图片为：'.$value.'</br>';
	}
?>
</body>
</html>