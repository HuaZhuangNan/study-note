<!doctype html>
<html>
<head>
<meta http-equiv="content-type" content="type=text/html;charset=utf-8" />
<title>正则表达式</title>
</head>

<body>
<?php
	/*
		正则表达式：
		+        		匹配至少包含一个前导字符串
		*        		匹配任何包含零个或一个前导字符串
		?        		匹配任何包含零个或一个前导字符
		.        		匹配任意字符串，一一对应
		{x}      		匹配任何包含x个前导字符串
		{x,y}    		匹配任何包含x到y个前导字符串
		{x,} 			匹配任何包含至少 x个前导字符串 
		$ 		 		匹配字符串的行尾,一般加在字符串尾，句尾匹配
		^ 		 		匹配字符串的行首，从开头匹配
		当^和$一起用的尽量用 == 
		| 		 		匹配字符串的左边或者右边 
		() 		 		包围一个字符分组或定义个反引用，可以使用\1\2提取,组合字符串
		[a-z] 			匹配任何包含小写字母 a-z的字符串 
		[A-Z] 			匹配任何包含大写字母 A-Z的字符串 
		[0-9] 			匹配任何包含数字 0-9的字符串 
		[abc] 			匹配任何包含小写字母 a、b、c的字符串 
		[^abc] 			匹配任何不包含小写字母 a、b、c的字符串
		 
		[a-zA-Z0-9_] 	匹配任何包含 a-zA-Z0-9和下划线的字符串 
		\w 				匹配任何包含 a-zA-Z0-9和下划线的字符串（同上）
		 
		\W 				匹配任何没有下划线和字母数字的字符串 
		\d 				匹配任何数字字符，和[0-9]相同 
		\D 				匹配任何非数字字符，和[^0-9]相同 
		\s 				匹配任何空白字符 
		\S 				匹配任何非空白字符 
		\b 				匹配是否到达了 单词 边界 
		\B		 		匹配是否没有达到单词边界
		  
		\ 				匹配正则中的特殊字符
		i 				完成不区分大小写的搜索 
		m 				在匹配首内容或者尾内容时候采用多行识别匹配,即使是换行也匹配 
		x 				忽略正则中的空白 
		A 				强制从头开始匹配 
		U 				禁止贪婪匹配 只跟踪到最近的一个匹配符并结束

		前导就是前面的一个字符
	*/
	echo '当前目录为'.__FILE__.'<hr/>';
	
	$mode="/h+ello/i";//正则规则,e的前导h,i表示不区分大小写，h+就是至少包含一个h
	$string="HHHHHELLO word!";
	
	echo 'preg_match()查找函数存在1否者0,加参数i不区分大小写<br/>';
	echo '无参数的结果为'.preg_match($mode,$string).'<br/>';
	echo '加参数i不区分大小的结果为'.preg_match($mode,$string).'<br/>';
	echo '<hr/>';
	
	$mode2='/^h/';//匹配开头为h的字符串
	$newarray=array('hello','Hello','word','php','hello word');
	echo 'preg_grep()搜索数组函数返回匹配到的数组<br/>';
	print_r(preg_grep($mode2,$newarray));
	echo '<hr/>';
	
	$mode2='/o$/';//匹配开头为0结尾的字符串
	echo 'preg_grep()搜索数组函数返回匹配到的数组<br/>';
	print_r(preg_grep($mode2,$newarray));
	echo '<hr/>';
	
	$mode3='/o\w/';//匹配开头为0结尾的字符串
	$string2="shuoooesogodsgsoghdsuhosuogunb";
	$newarray2=array();
	echo 'preg_match_all()全局匹配把搜到的字符串放在一个数组里<br/>';
	preg_match_all($mode3,$string2,$newarray2);
	print_r($newarray2);
	echo '<hr/>';
	
	echo 'preg_quote()在包含 $ ^ * () + = {} [] | \\ : <>前插入反斜杠<br/>';
	echo preg_quote('衣服价格为: $28');
	echo '<hr/>';
	
	$mode4='/([a-z]{3})([0-9])/iU';//匹配开头为0结尾的字符串,不分大小写禁止贪婪
	$replace='<span style="color:red;">\1\2</span>';// \1 表示[a-z]{3} \2表示
	$string3='This i@s PHP5p,This is PHP4p';
	echo 'preg_replace()全局匹配把搜到的字符串,替换掉后返回<br/>';
	echo '修改前'.$string3;
	echo '</br>修改后'.preg_replace($mode4,$replace,$string3);
	echo '<hr/>';
	
	echo 'preg_split()分割字符<br/>';
	print_r(preg_split('/[@,]/',$string3));
	echo '<hr/>';
	
	echo '<hr/>当前第'.__LINE__.'行';  

?>
</body>
</html>