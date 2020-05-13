<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Cookie会话</title>
</head>
<form action="2018-10-17(4).php" method="post" name="tp1" />
	<label for="name">姓名<label>
    <input id="name" name="name" type="text" autocomplete="off"  placeholder="请输入你的姓名" >
    <input name="sub" type="submit" value="提交">
</form>
<body>
<?php
	//第一个名字，第二个表示值,第三个过期时间1天
	if(isset($_POST['sub']) && $_POST['sub']=='提交'){
		$name='姓名';
		$value=$_POST['name'];
		setcookie($name,$value,time()+(1*24*60*60));
		echo '</br>COOKIE值:'.$_COOKIE[$name].'<br/>';
	}
?>
</body>
</html>