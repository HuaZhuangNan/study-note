<?php
/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-21 23:33:39
 * @version $Id$
 */
class Computer {
   private $_name = '联想';
   //__set拦截器方法赋值，传两个变量
    function __set($_key,$_value){
    		$this -> $_key = $_value;
    }
    //__get方法取值
    function __get($_key){
        return $this -> $_key;
    }
    //采用__call()方法屏蔽错误调用,只对方法有用，字段没用
    public function __call($_methodName,$_argList){
    	
    		echo $_methodName.'()方法不存在<br/>';
    		print_r($_argList);//传过来参数数组	
    }
    //用__toString()防止直接打印对象
    public function __toString(){
     	return '不可以直接打印对象';
    }
}

$computer = new Computer();
echo ($computer -> _name).'<br/>';
echo ($computer -> _gee(1,2)).'<br/>';//不存在
echo $computer.'<br/>';//不可以直接打印
?>