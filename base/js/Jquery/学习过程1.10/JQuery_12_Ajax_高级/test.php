<?php
  $_arr = array('a'=>1,'b'=>2,'c'=>3);
  $_callback = $_GET['callback'];//跨域问题直接在php文件里面用
  echo json_encode($_arr).$callback;
?>