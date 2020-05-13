<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>随机数\/数学函数</title>
</head>

<body>
<?php
@header("content-Type: text/html; charset=utf-8"); //语言强制
//生成随机整数int数
echo rand();
echo rand(2.100);
//生成随机数，速度更快
echo mt_rand();
echo mt_rand(2,100);
//生成最大随机数，32767
echo getrandmax(); 
//生成最大随机数，2147483647
echo mt_getrandmax();
//
abs();//绝对值
floor();//舍尾得整
ceil();//进一取整
round();//四舍五入
min();//求最小值或数组最小值
max();//求最大值或数组最大值
pi();//圆周率
pow(2.3);//2的三次方
?>
</body>
</html>