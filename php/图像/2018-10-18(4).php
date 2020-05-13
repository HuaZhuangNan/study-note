<?php 
	//微缩图改变大小，以及容量改变
	
	//文件名MIME类型 指定标头输出类型png jpg gif bmp jpeg wbmp
	header('Content-Type:image/png');
	
	//获取图片
	$flie=dirname(__FILE__).'\\';
	list($width,$height) = getimagesize($flie.'1.png');//图片路径,可以其他格式jpg等
	$new_width = $width *0.08;
	$new_height = $height *0.05;
	//创建一个新图
	$im =imagecreatetruecolor($new_width,$new_height);
	//载入原图
	$im2 = imagecreatefrompng($flie.'1.png');//图片路径
	//将原图重新采样到新图上
	imagecopyresampled($im,$im2,0,0,0,0,$new_width,$new_height,$width,$height);
	//颜色
	$blue = imagecolorallocate($im,0,110,255);//RGB颜色 50,100 透明
	//添加元素
	//中文问题
	//$text= iconv('utf-8','utf-8','冷小莫');
	$text='';
	for($i=0;$i<4;++$i){
		$text .= dechex(mt_rand(0,15));//0-15随机数 转化16进制
	}
	$fontfile = 'C:\Windows\Fonts\simhei.ttf';
	//第二个是字体大小，旋转角度，X，Y
	imagettftext($im,28,0,15,35,$blue,$fontfile,$text);//引入字体文件
	//输出 jpeg第二个是过度，第三个是0-100清晰度
	imagepng($im);
	//清空所有资源
	imagedestroy($im);
	imagedestroy($im2);
?>