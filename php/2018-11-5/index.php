<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>2018-11-5</title>
<style type="text/css">
	*{
	padding: 0;
	margin: 0;
	font-size: 16px;
	/* [disabled]font-family:"宋体"; */
	 }
	 #from5 {
		 padding:10px;
		 margin:20px auto auto auto;
		 width:300px;
		 height:300px;
		 border: #666 solid 2px;
		 text-align:center;
		 
	}
	input,textarea{
		margin:10px auto 10px 5px;
		padding-left:5px;
		line-height:20px;	
	}
	#open{
		padding:10px;
		margin:20px auto auto auto;
		idth:300px;
		height:300px;
		background:#red;
		border: #666 solid 2px;
		text-align:center;
	}
</style>
</head>
<body>
<div id="from5" >
    <h1><p align="center" style="margin-top:10px;margin-bottom:20px;">发表留言</p></h1>
        <form  name="from1" action="?do=save" method="post">
            <label for="title">标题</label>
            <input id="title" size="20" name="title" placeholder="请输入文章标题" type="text" /><br/>
            <label for="author">作者</label>
            <input  id="author" name="author" type="text" placeholder="请输入名字" /><br/>
            <label for="contact">内容</label>
            <textarea id="contact" cols="20" rows="5" name="contact"></textarea><br/>
            <input type="reset"  value="重置">
            <input type="submit" name="sub" value="提交" >
        </form>
    </div>
<?php 
	if(isset($_POST['sub'])){
		writ_post_info();
	}
	function writ_post_info(){
		
		$title = $_POST['title'];
		$author = $_POST['author'];
		$contact = $_POST['contact'];
		if(empty($title)){
			echo '<script type="text/javascript" lang="javascript">alert("标题不可以为空！")</script>';
			exit;
		}
		if(empty($author)){
			echo '<script type="text/javascript" lang="javascript">alert("标题不可以为空！")</script>';
			exit;
		}
		if(empty($contact)){
			echo '<script type="text/javascript" lang="javascript">alert("标题不可以为空！")</script>';
			exit;
		}
		$path = "./DB/";
		$filename = 'S'.date("Y-m-d H-i-s").'.text';
		$fp = fopen($path.$filename,"w");
		fwrite($fp,'标题：'.$title."\r\n");
		fwrite($fp,'作者：'.$author."\r\n");
		fwrite($fp,'内容：'.$contact."\r\n");
		fclose($fp);
		echo '<script type="text/javascript" lang="javascript">alert("留言成功");</script><hr/>';
		foreach(scandir($path) as $v){
			if($v != '.' && $v != '..'){
				$fs = fopen($path.$v,"r");
				echo '<p align="center">'.fgets($fs)."<p/>";
				echo '<p align="center">'.fgets($fs)."<p/>";
				echo '<p align="center">'.fread($fs,filesize($path.$v))."<p/>";
			}
			
		}
	}
?>
</body>
</html>