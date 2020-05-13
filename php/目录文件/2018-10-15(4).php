<!doctype html>
<html>
<head>
<meta http-equiv="content-type" content="type=text/html;charset=utf-8" >
<title>文件处理-写入-读取</title>
</head>

<body>
<?php
	$filename='demo.php';
	$outstring ="Hello";//双引号才解析\n\r\t
	$outstring2 =" Word \r\n hello2";
	
	echo '</br>file_put_contents($filename2,$outstring)如果没有就直接创建,一般用于只有一句话，不需要任何灵活的事情使用，PHP5版本<br/>';
	
	$fpc = file_put_contents($filename,$outstring);
	if($fpc!=false){
		echo $outstring.'写入'.$filename.'成功！<br/>';
	}
	else{
		echo $outstring.'写入'.$filename.'失败！<br/>';
		exit;
	}
	
	echo 'fopen()调用失败返回false，成功返回资源类型resource,称之为句柄，或者资源句柄';
	echo '</br>fopen($filename,\'w\')第一个表示文件，第二个表示参数,w表示如果有就删除重建，如果是a就是追加如果没有就直接创建<br/>';
	
	$fp = fopen($filename,'a'); 
	if($fp!=false){
		echo $filename.'打开成功！<br/>';
	}
	else{
		echo $filename.'打开失败！<br/>';
		exit;
	}
	echo '</br>fwrite($fp,$outstring,3);调用失败返回false,写入数据到文件,并且限制长度3<br/>';
	echo '</br>strlen()计算字符串长度<br/>';
	
	flock($fp,LOCK_EX);//锁定文件,防止两个客户以上操作数据出错
	$fw = fwrite($fp,$outstring2,strlen($outstring2));
	if($fw!=false){
		echo $outstring.'写入'.$filename.'成功！<br/>';
		flock($fp,LOCK_UN);//解除锁文件
	}
	else{
		echo $outstring.'写入'.$filename.'失败！<br/>';
		flock($fp,LOCK_UN);//解除锁文件
		fclose($fp);
	}
	echo '</br>fclose($fp)调用失败返回false,关闭已经打开的文件指针<br/>';
	$fc = fclose($fp);
	if($fc!=false){
		echo $filename.'关闭成功！<br/>';
	}
	else{
		echo $filename.'关闭失败！<br/>';
		exit;
	}
	
	
	echo '<hr/>';
	
	echo '读出文件';
	echo '</br>fopen($filename,\'r\')第一个表示文件，第二个表示参数,r表示只读如果没有就直接创建<br/>';
	
	$fp = fopen($filename,'r'); 
	if($fp!=false){
		echo $filename.'读取成功！<br/>';
	}
	else{
		echo $filename.'读取失败！<br/>';
		exit;
	}

	echo '<hr/>';
	echo '</br>fgetc($fq)调用失败返回false,一个字符读取，文件指针<br/>';
	$fgc = fgetc($fp);
	if($fgc!=false){
		echo '读取结果：'.$fgc.'<br/>';
	}
	else{
		echo $filename.'读取失败！<br/>';
		exit;
	}
	
	echo '</br>feof($fq)光标是否到达最后<br/>';
	if(!feof($fp)){
		echo '光标未到最后<br/>';
	}
	else{
		echo '光标到了最后<br/>';
		exit;
	}
	echo '<hr/>';
	
	echo '</br>fgets($fq,2)调用失败返回false,一行行读取，2表示读取2个,文件指针<br/>';
	$fgs = fgets($fp);
	if($fgc!=false){
		echo '读取结果：'.$fgs.'<br/>';
	}
	else{
		echo $filename.'读取失败！<br/>';
		exit;
	}

	echo '<hr/>';
	echo '</br>fgetss($fq)调用失败返回false,可以过滤html,文件指针<br/>';
	$fgss = fgetss($fp);
	if($fgc!=false){
		echo '读取结果：'.$fgss.'<br/>';
	}
	else{
		echo $filename.'读取失败！<br/>';
		exit;
	}
	echo '<hr/>';
	
	echo '</br>ftell($fp);返回文件指针现在位置，调用失败返回false<br/>';
	echo ftell($fp);
	
	echo '<hr/>';
	echo '</br>rewind($fp);倒回文件指针最开始位置,调用失败返回false<br/>';
	rewind($fp);
	
	echo '<hr/>';
	echo '</br>fseek($fp,5);倒回文件指针到指定位置,调用失败返回false<br/>';
	fseek($fp,5);
	
	echo '<hr/>';
	echo '</br>fpassthru($fp);读取指针之后的所有字符,返回读取前指针后剩余字符长度,调用失败返回false<br/>';
	fpassthru($fp);
	
	echo '<hr/>';
	$fc = fclose($fp);
	if($fc!=false){
		echo $filename.'关闭成功！<br/>';
	}
	else{
		echo $filename.'关闭失败！<br/>';
		exit;
	}

	echo '<hr/>';
?>
</body>
</html>