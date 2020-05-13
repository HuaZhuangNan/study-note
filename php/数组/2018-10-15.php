<!doctype html>
<html>
<head>
<meta http-equiv="content-type" content="type=text/html;charset=utf-8" >
<title>数组插入修改</title>
</head>

<body>
<?php
	@header("content-Type: text/html; charset=utf-8"); //语言强制
 $a =array("one");
 echo '默认数组</br>';
 print_r($a);
 
 echo '</br>在开头插入数据</br>';
 array_unshift($a,"开头");
 print_r($a);

 echo '</br>在结尾插入数据</br>';
 array_push($a,"结尾");
 print_r($a);

 echo '</br>删除开第一个头数据</br>';
 array_shift($a);
 print_r($a);

 echo '</br>删除结第二个尾数据</br>';
 array_pop($a);
 print_r($a);
 
 echo '<hr/>';
 
 $b =array('one'=>"1",'two'=>"2",'there'=>"3");
 echo '随机获取数组的key键值，并且如果果两个以上返回一个新数组</br>';
 $c = array_rand($b,1);//获取$b数组的2个键值
 print_r($c);
 echo '<br/>';
 $d = array_rand($b,2);//获取$b数组的2个键值
 print_r($d);
?>
</body>
</html>