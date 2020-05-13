<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Sesson会话处理</title>
</head>
<form action="2018-10-17(5).php" method="post" name="tp1" />
	<label for="name">姓名<label>
    <input id="name" name="name" type="text" autocomplete="off"  placeholder="请输入你的姓名" >
    <input name="sub" type="submit" value="提交">
</form>
<body>
<?php
	echo '<br/>session_start()开启SESSION才可以使用<br/>';
	//安全性一般用于后台，一段时间不操作自动消除
	session_start();
	$_SESSION['name']='';
	if(!empty($_POST['name']) && isset($_POST['sub']) && $_POST['sub']=='提交'){
		$_SESSION['name']=$_POST['name'];
		echo '值为'.$_SESSION['name'];
		echo '<script type="text/javascript" language="javascript">var b=document.getElementById("name").value="'.$_POST['name'].'"</script>';
		$_SESSION['name']='';
		session_destroy();//销毁所有的值
		if(empty($_SESSION['name'])){
			echo '<br/>缓存清除成功';
		}
	}
	else{
		$_SESSION['name']='未设置';
	}

?>
</body>
</html>