<!doctype html>
<html>
<head>
<meta http-equiv="content-type" content="type=text/html charset=utf-8"/>
<title>二维数组</title>
</head>

<body>
<?php
  @header("content-Type: text/html; charset=utf-8"); //语言强制
	$products = array(
		array("one",1,"一"),
		array("two",2,"二"),
		array("there",3,"三")
	);
	print_r($products);
	echo '</br>';
	//“”双引号要解析 单引号不解析 ，如解析转义字符/n等
	print_r($products[1]);
	echo '</br>';
	print_r($products[2][0]);
	echo '</br>';
	//循环打印
	for($i=0;$i <count($products);++$i){
		
		for($j=0;$j<count($products[$i]);++$j){
			
			echo $products[$i][$j].'|';	
		}
		echo '</br>';
	}
	echo '<hr/>';
	$products_newkey = array(
		array("英文"=>"one","数字"=>1,"中文"=>"一"),
		array("英文"=>"two","数字"=>2,"中文"=>"二"),
		array("英文"=>"there","数字"=>3,"中文"=>"三")
	);
	print_r($products_newkey);
	echo '<br/>';
	
	for($i=0;$i < count($products_newkey);++$i){
		
		foreach($products_newkey[$i] as $key => $value){
			echo $key."=>".$value.'|';
		}
		echo '<br/>';
	}
	
	echo '<hr/>';
	$products_newkey2 =$products_newkey;
	for($i=0;$i < count($products_newkey2);++$i){
		
		while(!!list($key2,$value2)=each($products_newkey2[$i])){
			echo $key2."---".$value2.'|';
		}
		echo '<br/>';
	}
?>
</body>
</html>