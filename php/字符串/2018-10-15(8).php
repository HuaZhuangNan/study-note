<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>字符串格式化</title>
</head>

<body>

<?php
 @header("content-Type: text/html; charset=utf-8"); //语言强制
 	echo '当前路径：'.__FILE__.'<hr/>';

	echo 'trim()处理两边多余个空格<br/>';
	echo trim('        两边空白消失      ');
	echo '<hr/>';
	
	echo 'chop()处理后边多余个空格<br/>';
	echo chop('        后边空白消失      ');
	echo '<hr/>';
	
	echo 'rtrim()处理前边多余个空格<br/>';
	echo rtrim('        前边空白消失      ');
	echo '<hr/>';
	
	echo 'nl2br()函数作为输入符\n更改为br<br/>';
	echo nl2br("hello word! \n mimi ");
	echo '<hr/>';
	
	echo 'htmlentities()函数转化所有字符<br/>';
	echo htmlentities('<strong>hello word! mini</strong>');
	//建议直接输出
	echo '<strong>直接输出</strong>';
	echo '<hr/>';
	
	echo 'htmlspecialchars()函数转化特殊字符<br/>';
	echo htmlspecialchars('<strong>hello word! mini</strong> ');
	echo '<hr/>';
	
	echo 'strip_tags()函数去掉特殊字符html<br/>';
	echo strip_tags('<strong>hello word! mini</strong> ');
	echo '<hr/>';
	
	echo 'strtoupper()函数将字符全转化为大写<br/>';
	echo strtoupper('<strong>hello word! mini</strong> ');
	echo '<hr/>';
	
	echo 'strtolower()函数将字符全转化为小写<br/>';
	echo strtolower('<strong>HELLO WORD!</strong> ');
	echo '<hr/>';
	
	echo 'ucfirst()函数将字符串第一个字母转化为大写<br/>';
	echo ucfirst('<strong>hello word!</strong> ');
	echo '<hr/>';
	
	echo 'ucwords()函数将字符串每个单词第一个字母转化为大写<br/>';
	echo ucwords('<strong> hello word!</strong> ');
	echo '<hr/>';
	
	echo 'addslashes()函数将字符中特殊符号转义下<br/>';
	echo addslashes('<strong> h"ell"o word!</strong> ');
	echo '<hr/>';
	
	echo 'stripcslashes()函数将字符中特殊符号去掉<br/>';
	echo stripcslashes('<strong> h\“ell\"o word!</strong> ');
	echo '<hr/>';
	
	echo 'str_pad()函数用指定字符填充字符串<br/>';
	echo str_pad('hello',7,'#',STR_PAD_BOTH).'word';
	//STR_PAD_BOTH 两边
	//STR_PAD_ROGHT 右边
	
	echo '<hr/>';
	
	echo 'strtok()函数按字符分割返回字符串，如果是英文这个更好，可以更灵活多个切割符<br/>';
	$email=strtok('2382252568@qq.com','@.');
	while(!!$email){
		echo $email."</br>";
		$email = strtok('@.');;
	}
	echo '<hr/>';
	
	echo 'explode()函数按字符分割返回数组<br/>';
	$email=explode('@','2382252568@qq.com');
	print_r($email);
	
	echo '<hr/>';
	
	echo 'implode()函数数组链接可选连接符<br/>';
	echo implode($email);
	echo implode('@',$email);
	echo '<hr/>';
	
	echo 'explode()函数按字符分割返回数组<br/>';
	$email=explode('@','2382252568@qq.com');
	print_r($email);
	echo '<hr/>';
	
	echo 'substr()函数按参数读取分割<br/>';
	$email='2382252568@qq.com';
	echo  substr($email,2,5);//从第三个读取5
	echo '<hr/>';
	
	echo 'str_split函数按单个读取分割返回一个数组，英文可以<br/>';
	$str="i is a student !";
	print_r(str_split($str));
	echo '<hr/>';
	
	echo 'strrev()函数将字符串反过来,英文可以<br/>';
	$str="i is a student !";
	echo strrev($str);


	echo '<hr/>代码：'.__LINE__.'行';

?>
</body>
</html>.