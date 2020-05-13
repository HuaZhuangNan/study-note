<?php 
	//用js也可以
	
	//文件名MIME类型 指定标头输出类型png jpg gif bmp jpeg wbmp
	header('Content-Type:image/png');
	
	//创建空白的图像区域
	//字体两种，资源；类型一般要加@符号
	$im = imagecreatetruecolor(200,200);//返回的是一个资源句柄
	
	//为一幅画分配颜色
	$blue = imagecolorallocate($im,0,102,255);//RGB颜色 50,100 透明
	//区域填充 x ，y
	imagefill($im,0,0,$blue);
	
	//背景加些东西
	$white = imagecolorallocate($im,255,255,255);//白色
	//画一条线段
	 imageline($im,0,0,200,200,$white);
	 imageline($im,200,0,0,200,$white);
	 //画字体6号字体
	 imagestring($im,6,80,50,'YZM',$white);
	
	//输出图形png
	 imagepng($im);
	 
	 //清空所有资源
	 imagedestroy($im);
?>