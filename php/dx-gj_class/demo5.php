<?php
/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-22 00:26:38
 * @version $Id$
 */
//php反射
//查看自定义类
class Computer {
   private $_name = '联想';
   public $_model = 'i7';
   const ID ='6';
   //__set拦截器方法赋值，传两个变量
    function __set($_key,$_value){
    		$this -> $_key = $_value;
    }
    //__get方法取值
    function __get($_key){
        return $this -> $_key;
    }
	public function _run(){


	}
}

//使用反射列出信息,输出
//Reflection::export(new ReflectionClass('Computer'));

//获取类里面的某个元素
$_rc = new ReflectionClass('Computer');
echo $_rc -> getName().'<br/>';//方法名
echo $_rc -> getFilename().'<br/>';//路径
print_r(($_rc->getConstants()));//常量


?>