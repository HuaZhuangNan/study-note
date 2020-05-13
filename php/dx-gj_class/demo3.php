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
    	
    		echo $_methodName.'()方法不存在';
    		print_r($_argList);//传过来参数数组	
    }
    //用__toString()防止直接打印对象
    public function __toString(){
     	return '不可以直接打印对象';
    }
    //__clone()表示对象克隆后的行为
    public function __clone(){
     	$this -> _name = '克隆后方法调用了';//$this 表示克隆后的类
    }
}

$computer1 = new Computer();
//$computer2 = $computer1;//地址传梯，都是指向同一地方
//$computer2 = new Computer();//独立实例就是_name=联想
$computer1 -> _name='DELLO';
$computer2 =clone $computer1;//对象克隆 值也会变，但是是复制出来的，之后就是独立的
echo ($computer1 -> _name).'<br/>';
echo ($computer2 -> _name).'<br/>';
?>