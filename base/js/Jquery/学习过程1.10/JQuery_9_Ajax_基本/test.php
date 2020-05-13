<?php
if(isset($_GET['time']) || isset($_GET['type'])){
  date_default_timezone_set('PRC'); //设置中国时区 
  $time = round($_GET['time']/1000);//去掉传过来的微妙
  if($time >= time()-1*60 && $time <= time()+1*60){ //设置上下浮动共2秒
    if($_GET['type']=="json"){
      echo json_encode("<span>你好哦</span>");
    }else {
      echo '<span>你好哦</span>';
      echo '<br/>请求时间:'.date("Y-m-d H:i:s",$time);
    }
  }else{
    echo '请求时间超时！';
  } 
}else if(isset($_POST['time']) && isset($_POST['type'])){
  if($_POST['type']=="json"){
  	echo json_encode("<span>你好哦</span>");
  }else {
    echo '<span>你好哦</span>';
  }
}else {
  echo 'error';
}
?>