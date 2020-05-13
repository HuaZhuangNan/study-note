<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>函数</title>
</head>

<body>
<?php
  @header("content-Type: text/html; charset=utf-8"); //语言强制
  
  echo 'PHP版本：'.PHP_VERSION.'<hr/>';
	//标准函数，内置函数
	echo 'md5(123)加密的值为：'.md5('123').'<hr/>';
	echo 'sha1(123)加密的值为：'.sha1('123').'<hr/>';
	echo '圆周率pi()de值为：'.pi().'<hr/>';
	//函数调用不区分大小写，变量区分
	$a=2;
	echo '& 这个符号加了就是引用变量空间赋值，如果没有这个就是别的空间<br/>';
	function aa(&$a){
		return $a+=2;
	}
	aa($a);
	
	echo $a.'<hr/>';//这个时候a=4
	
	$b=1;
	echo '函数体变量变成全局变量global<br/>';
	function bb(){
		global $b;
		$b=6;
	}
	bb();
	echo $b.'<hr/>';//等于6
	
	echo '超全局变量$GLOBAL[]<br/>';
	$GLOBAL['c']=5;
	function cc(){
		$GLOBAL['c']=2;
	}
	echo $GLOBAL['c'].'<hr/>';//等于2
	
	//require('./tool/tool_math.php');
	//include()载入工具函数文件，如果不存在就警告还会继续执行
	//include_once();只包含一次，如果包含了就不再包含
	//require()//包含；//如果不存在就直接报错停止执行,建议使用
	//require_once();只包含一次，后面还有都会被忽略
	//echo '半径为5的圆的面积为：'.round(ymj(5),2).'<hr/>';//调用里面的函数,并且把结果四舍五入保留两位小数
	
	echo '魔法常量<br/>';
	echo '_ _FILE_ _ 是表示当前目录路径和文件名：'.__FILE__.'<hr/>';//文件名时速度更快
	
	//require(__FILE__);不可以
	require(dirname(__FILE__).'/tool/tool_math.php');
	echo '半径为5的圆的面积为：'.round(ymj(5),2).'<hr/>';
	
	echo '_ _LINE_ _ 表示当前行号：'.__LINE__.'<hr/>';
	
	function fname(){
		return __FUNCTION__;
	}
	echo '_ _FUNCTION_ _ 表示当函数名：'.fname().'<hr/>';
	 
	
?>
</body>
</html>