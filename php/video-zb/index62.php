<?php
//文件判断吧,数据库配置文件
    $filename='ok.cm';
    $outstring ="这个文件是用来判断是否安装了的不可以删除！\r\n 作者：陌轩痕 \r\n 版本:BUG 1.0.0 \r\n 安装时间 ". date("Y-m-d h:i:s");
	$fp = @fopen($filename,'r');
	if($fp!=false){
	    echo $filename.'打开成功！<br/>';
	    //include '网页主页';
	}
	else{
	    $fpc = @file_put_contents($filename,$outstring);
	    if($fpc!=false){
	        header("location:install/");
	    }
	    else{
	        echo '文件权限不足，请设置权限！';
	        exit;
	    }
	}	
?>