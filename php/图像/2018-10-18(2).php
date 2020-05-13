<?php 
	//加载已有的图像
	
	//文件名MIME类型 指定标头输出类型png jpg gif bmp jpeg wbmp
	header('Content-Type:image/png');
	
	//引入图片
	$flie=dirname(__FILE__).'\\';
	$im = imagecreatefrompng($flie.'1.png');//图片路径
	//颜色
	$blue = imagecolorallocate($im,0,110,255);//RGB颜色 50,100 透明
	$white = imagecolorallocate($im,255,255,255);//白色
	//添加元素
	imagestring($im,5,20,20,'wxwmy.cn',$blue);
	
	//输出
	imagepng($im);
	//清空所有资源
	imagedestroy($im);
?>