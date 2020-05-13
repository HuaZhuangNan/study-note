<?php 
	//简单的验证码
	
	//文件名MIME类型 指定标头输出类型png jpg gif bmp jpeg wbmp
	header('Content-Type:image/png');
	
	//创建空白的图像区域
	//创建随机数0-15
	//创建最简单的字母和数字混搭
	//16进制0-9 a-f
	
	$text='';
	for($i=0;$i<4;++$i){
		$text .= dechex(mt_rand(0,15));//0-15随机数 转化16进制
	}
	//图片
	$im = imagecreatetruecolor(65,25);
	//颜色
	$blue = imagecolorallocate($im,0,110,255);//RGB颜色 50,100 透明
	$white = imagecolorallocate($im,255,255,255);//白色
	//填充背景
	imagefill($im,0,0,$blue);
	//添加字体
	imagestring($im,5,15,5,$text,$white);
	//输出
	imagepng($im);
	//清空所有资源
	imagedestroy($im);
?>