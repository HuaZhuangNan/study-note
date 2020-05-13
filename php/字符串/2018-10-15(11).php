<!doctype html>
<html>
<head>
<meta http-equiv="content-type" content="type=text/html;charset=utf-8">
<title>处理中文字符GBK.UTF8,GB2312</title>
</head>

<body>

<?php

	//@header("Content-Type: text/html;charset=utf-8");
	echo '当前路径：'.__FILE__.'<hr/>';
	
	echo 'mb_strlen()对应函数strlen(),求字符长度';
	$str = '字符长度uft-8遍码符号';
	echo '</br>strlen的结果(utf-8编码下)为：'.strlen($str);//如果是utf-8一个汉子3字节，gbk就是2 个字节
	echo '</br>mb_strlen的结果为：'.mb_strlen($str,'utf-8');
	echo '<hr/>';
	
	echo 'substr()从第三个字符开始取出3个字符（utf-8编码下汉子占3个字节）,mb_substr则不同,加编码后参数就是一对一了';
	echo '</br>substr的结果为：'.substr($str,3,3);
	echo '</br>mb_substr的结果(utf-8编码下)为：'.mb_substr($str,1,1,'utf-8');
	echo '<hr/>';
	
	echo 'strpos()求第一个字符出现的位置（utf-8编码下汉子占3个字节）,mb_strpos()求第一个中文出现的位置';
	echo '</br>strpos的结果为：'.strpos($str,'长');
	echo '</br>mb_strpos的结果(utf-8编码下)为：'.mb_strpos($str,'长','0','utf-8');//从0位置开始搜索
	echo '<hr/>';
	
	echo '以下没啥区别的代码<br/>';
	echo 'substr()取出字符（utf-8编码下汉子占3个字节）,mb_substr()求第一个中文出现的位置';
	echo '</br>substr的结果为：'.substr($str,0,3);//从0位置开始搜索，取出3个字符
	echo '</br>mb_substr的结果(utf-8编码下)为：'.mb_substr($str,0,1,'utf-8');//从0位置开始搜索，取出一个中文
	echo '<hr/>';
	
	echo 'substr_count()取出指定字符后面的字符,mb_substr_count()取出指定字符后面的中文';
	echo '</br>substr_count的结果为：'.substr_count($str,'符');//返回剩余的字符
	echo '</br>mb_substr_count的结果(utf-8编码下)为：'.mb_substr_count($str,'符','utf-8');
	echo '<hr/>';
	
	echo 'str_replace()@替换成#,str_ireplace()不区分大小写';
	echo '</br>str_replace的结果为：'.str_replace('符','替换了"符"字',$str);
	
	echo '<hr/>代码：'.__LINE__.'行';
?>
</body>
</html>