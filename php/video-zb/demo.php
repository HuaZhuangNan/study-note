<?php
header('Content-Type:text/html; charset=utf-8');
include_once "public/public.class.php";
$host ='127.0.0.1';
$name ='root';
$password ='root';
$base='test';
$tablename='zbtb';
$arr=array('name'=>'cctv2','hdurl'=>'22','mdurl'=>'33','udurl'=>'44','tdurl'=>'884','type' => 'writ');
$arr2=array('name'=>'cctv5','hdurl'=>'11','mdurl'=>'151','udurl'=>'115','tdurl'=>'888','type' => 'writ');
$arr3=array('name'=>'cctv6','hdurl'=>'11','mdurl'=>'151','udurl'=>'115','tdurl'=>'888','type' => 'writ');

$arr4=array('hdurl'=>'11','mdurl'=>'151','udurl'=>'115','tdurl'=>'888','type' => 'set','id'=>'100001');
$arr5=array('type' => 'del','id'=>'100006');
//$type='uft-8';
//$port=3306;
//链接数据库
$sql = new MySQl_info($host,$name,$password,$base);
//echo $sql -> createSQL($tablename);//建表
//echo $sql -> wSQL($tablename,$arr);//插入数据
//echo $sql -> wSQL($tablename,$arr2);
//echo $sql -> wSQL($tablename,$arr4);//修改
//echo $sql -> wSQL($tablename,$arr5);//删除


$name =$_POST['name'];
$data = array("name","hdurl","mdurl","udurl","time");
$rec = $sql ->zbData($tablename,$name,$data);

echo Tool::return_json($rec);

?>