<?php
    //echo date('Y-m-d H:i:s')."\r\n";
    //定义编码
    header( 'Content-Type:application/json;charset=utf-8');
    //print_r(json_encode($_GET));
    //获取信息
    if(!empty($_GET)){
        $json = array(
            'code'=> 1,
            'data'=>$_GET,
            'message'=>"GET"
        );
    }else if(!empty($_POST)){
       $json = array(
            'code'=> 2,
            'data'=>$_POST,
            'message'=>"POST"
        );
    }else{
        $json = array(
            'code'=> 0,
            'message'=>"失败"
        );
    }
    print_r(json_encode($json));
    exit();
?>