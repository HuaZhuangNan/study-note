<!doctype html>
<html>
<head>
<meta http-equiv="content-type" content="type=text/html;charset=utf-8" />
<title>上传文件</title>
</head>
<form action="2018-10-17(6).php" method="post" enctype="multipart/form-data" name="updata1">
	<!--<input type="hidden" name="MAX_FILE_SIZE" value="1000000" />-->
    <label for="updata">上传文件</label><br/>
    <input name="updata" type="file" ><br/>
    <input name="sub" type="submit" value="上传">
</form>
<body>
<?php 
	//PHP上传配置
	echo '文件上传是否开启'.ini_get('file_uploads').'<br/>';// on | off
	echo '出错之前可允许的时间'.ini_get('max_execution_time').'秒<br/>';//出错之前可允许的时间
	echo '文件上传最大占内存'.ini_get('memory_limit').'B<br/>';
	echo '文件上传最大大小'.ini_get('upload_max_filesize').'B<br/>';
	echo '文件上传临时目录'.ini_get('upload_tmp_dir').'<br/>';
	echo '文件POST上传最大大小'.ini_get('post_max_size').'B<br/>';

	//$_FILES 超级全局变量,存在空值
	//print_r($_FILES);
	//error 返回0表示无错误 1表示上传超出约定值 2表示上传文件超过HTML中MAX_FILE_SIZE大小 3表示部分上传 4表示没有上传文件 6表示找不到临时文件夹 7文件写入失败 
	if(isset($_POST['sub'])){
		$updata='updata';//post name
		print_r($_FILES[$updata]);
		echo '<br/>文件名'.$_FILES[$updata]['name'].'<br/>类型'.$_FILES[$updata]['type'].'<br/>临时位置'.$_FILES[$updata]['tmp_name'].'<br/>临时位置'.$_FILES[$updata]['error'].'<br/>文件大小'.$_FILES[$updata]['size'].'字节<hr/>';
		
		//type 的处理
		$type=$_FILES[$updata]['type'];
		$typeImg=array('image/jpeg','image/pjpeg','image/gif','image/png','image/x-png');
		if(is_array($typeImg)){
			if(!in_array($type,$typeImg)){
				echo '本站不支持此格式图片';
				exit;
			}	
		}
		/*
		switch($type){
				case 'image/jpeg' : echo '火狐JPG<br/>';
					break;
				case 'image/pjpeg': echo 'IE-pJpeg<br/>';
					break;
				case 'image/gif' : echo 'gif<br/>';
					break;
				case 'image/png' : echo '火狐png<br/>';
					break;
				case 'image/x-png' : echo 'IE-png<br/>';
					break;
				default: echo '本站不支持此格式图片<br/>';
					exit;
		}
		*/
		//error 的处理
		$error=$_FILES[$updata]['error'];
		if($error > 0 && $error <=7 ){
			switch($error){
				case 1 : echo '文件上传超出约定值<br/>';
					break;
				case 2 : echo '文件上传文件超过HTML中MAX_FILE_SIZE大小<br/>';
					break;
				case 3 : echo '文件部分上传<br/>';
					break;
				case 4 : echo '没有上传文件<br/>';
					break;
				case 6 : echo '文件找不到临时文件夹<br/>';
					break;
				case 7 : echo '文件写入失败 <br/>';
					break;
			}
			exit;	
		}
		//size 处理
		define('IMG_MAX_SIZE',(2*1024*1024));//常量设置,图片最大2MB
		$defsize=$_FILES[$updata]['size'];
		if($defsize > IMG_MAX_SIZE){
			
			echo '文件超过了'.IMG_MAX_SIZE.'MB，上传失败';
		
		}
		
		echo '<hr/>is_uploaded_file()判断是否是HTTP POST上传的<br/>';
		$data_name=$_FILES[$updata]['name'];//文件名可以自己改
		$lsfile=$_FILES[$updata]['tmp_name'];
		$datafile=dirname(__FILE__);//当前路径名
		if(is_uploaded_file($lsfile)){
				
			echo '上传到临时文件成功';
			//先判断目录是不是存在
			if(!is_dir($datafile)){
				mkdir($datafile,0777);//最高权限，意思就是没有这个目录就创建，有就不管		
			}
			
			
			echo '<hr/>move_uploaded_file()移动文件,临时文件目录，移动目录<br\>';
			if(move_uploaded_file($lsfile,$datafile.'/updata/'.$data_name)){
				echo '上传文件完成';
			}
			else{
				echo '上传文件失败';
			}
		}
		else{
			
			echo '临时文件找不到';
		}
		
		echo '文件上传成功';
	
	}
	
?>
</body> 
</html>