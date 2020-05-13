<?php
/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-22 01:12:36
 * @version $Id$
 */
//载入html
$_sxe =simplexml_load_file('test.xml');
//读一级标签的值
//返回对象数组
$i=0;
foreach ($_sxe -> version as $key => $value) {
	$i++;
	echo $key.$i.'=>'.$value.'<br/>';
}
$i=0;
foreach ($_sxe -> info as $key => $value) {
	$i++;
	echo $key.$i.'=>'.$value.'<br/>';
}
//如果要访问二级标签
//echo $_sxe -> user -> name;
$i=0;
foreach ($_sxe -> user  as $key => $value) {
	$i++;
	echo $key.$i.'=>';
	foreach ($value -> name as $key2 => $value2 ) {
		echo $key2.$i.'=>'.$value2.'=>';
	}
	foreach ($value -> url as $key3 => $value3 ) {
		echo $key3.$i.'=>'.$value3.'=>';
	}
	foreach ($value -> author as $key4 => $value4 ) {
		echo $key4.$i.'=>'.$value4.'=>'.$value4 -> attributes().'<br/>';
	}
}
//echo $_sxe -> user -> author ->attributes();
echo '<hr/>';

//Xpath获取,推荐使用

$_a = $_sxe -> xpath('/root/version'); 
print_r($_a);
echo '<br/>';
foreach ($_a as $key => $value) {
	echo $key.'=>'.$value.'<br/>';
}

?>