<?php
header('Content-Type:text/html; charset=utf-8');
include_once "public/php/public.class.php";
$host ='127.0.0.1';
$name ='root';
$password ='root';
$base ='demoBlog';
$tablename ='user';
// $type ='uft-8';
// $port =3306;

// $arr=array('name'=>'cctv2','hdurl'=>'22','mdurl'=>'33','udurl'=>'44','tdurl'=>'884','type' => 'writ');
// $arr2=array('name'=>'cctv5','hdurl'=>'11','mdurl'=>'151','udurl'=>'115','tdurl'=>'888','type' => 'writ');
// $arr3=array('name'=>'cctv6','hdurl'=>'11','mdurl'=>'151','udurl'=>'115','tdurl'=>'888','type' => 'writ');
// 
// $arr4=array('hdurl'=>'11','mdurl'=>'151','udurl'=>'115','tdurl'=>'888','type' => 'set','id'=>'100001');
// $arr5=array('type' => 'del','id'=>'100006');
//链接数据库
$sql = new MySQl_info($host,$name,$password,$base);
//echo $sql -> createSQL($tablename);//建表
//echo $sql -> wSQL($tablename,$arr);//插入数据
//echo $sql -> wSQL($tablename,$arr2);
//echo $sql -> wSQL($tablename,$arr4);//修改
//echo $sql -> wSQL($tablename,$arr5);//删除
if($_POST && $_POST['reguser']){
  $birthday = $_POST['year'].'-'.$_POST['month'].'-'.$_POST['day'];
  foreach ($_POST as $key=>$value)
  {
    switch($key){
      case 'reguser':
        $_POST['user'] = $_POST[$key];
        unset($_POST[$key]);
       break;
      case 'regpass':
      	$_POST['pass'] = sha1($_POST[$key]);
      	unset($_POST[$key]);
      break;
      case 'notpass':
      case 'year':
      case 'month':
      case 'day':
      case 'agr':
        unset($_POST[$key]);
        break;
       default: ;
    }
  }
  $_POST['type'] = 'writ';
  $_POST['birthday'] = $birthday;
  $info = $sql -> wSQL($tablename,$_POST);//插入数据
  $rec = [];
  if($info == '修改数据成功'){
    $rec['data'] = 'succ';
  }
//   else{
//     $rec['data'] = null;
//   };
  //print_r($_POST);
  echo Tool::return_json($rec);
}
// $data = array("name","hdurl","mdurl","udurl","time");
// $rec = $sql ->zbData($tablename,$name,$data);
// 
// echo Tool::return_json($rec);

?>