<?php
/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-21 23:00:45
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
}