<?php 
	//加载自己有的文字
	
	//文件名MIME类型 指定标头输出类型png jpg gif bmp jpeg wbmp
	header('Content-Type:image/png');
	
	//引入图片
	$flie=dirname(__FILE__).'\\';
	$im = imagecreatefrompng($flie.'1.png');//图片路径
	//颜色
	$blue = imagecolorallocate($im,0,110,255);//RGB颜色 50,100 透明
	$white = imagecolorallocate($im,255,255,255);//白色
	//添加元素
	//中文问题
	$text= iconv('utf-8','utf-8','冷小莫');
	$fontfile = 'C:\Windows\Fonts\simhei.ttf';
	//第二个是字体大小，旋转角度，X，Y
	imagettftext($im,20,10,200,50,$blue,$fontfile,$text);//引入字体文件
	//输出
	imagepng($im);
	//清空所有资源
	imagedestroy($im);
?>