
<!doctype html>
<html>
<head>
<meta http-equiv="content-type" content="type=text/html;charset=utf-8" >
<title>数组指针操作下标统计</title>
</head>

<body>
<?php
   @header("content-Type: text/html; charset=utf-8"); //语言强制
	 $a=array('one'=>"一",'two'=>"二",'there'=>"三",'four'=>"四");
	 //current($a);获取指针哪一位元素
	 echo '指针默认第一位current()</br>';
	 echo current($a);
	 echo '</br>next()指针下移一位</br>';
	 echo next($a);
	 echo '</br>指针指向第二位current()</br>';
	 echo current($a);
	 echo '</br>reset()指针回归第一位</br>';
	 echo reset($a);
	 echo '</br>指针指向第一位current()</br>';
	 echo current($a);
	 echo '</br>next()指针下移3位</br>';
	 for($i=0;$i<2;++$i){
		next($a);
	 }
	 echo next($a);
	 echo '</br>prev()指针回归一位</br>';
	 echo prev($a);
	 
	 echo '<hr/>count()统计下标值个数</br>';
	 echo count($a);
	 
	 echo '</br>sizeof()统计下标值个数</br>';
	 echo sizeof($a);
	 
	 echo '<hr/>array_count_values()统计数组中值出现的个数,返回一个数组</br>';
	 $b=array('one'=>"一",'two'=>"二",'there'=>"三",'four'=>"二");
	 print_r($b);
	 echo '</br>';
	 print_r(array_count_values($b));
	 
	 echo '<hr/>extract函数将key设置成变量，然后将值给了这个变量</br>';
	 //初始化
	 $one = $two = $there = $four ='';
	 $b=array('one'=>"一",'two'=>"二",'there'=>"三",'four'=>"四");
	 print_r($b);
	 echo '<br/>extract(数组)返回下标key的数量</br>';
	 echo extract($b);
	 echo '<br/>下标key已经转换！</br>';
	 echo '第一个one= '.$one.'<br/>第二个two= '.$two.'<br/>第三个there= '.$there.'<br/>第四个four= '.$four.'<br/>';
 
?>
</body>
</html>