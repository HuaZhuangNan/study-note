<?php
/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-22 00:02:00
 * @version $Id$
 */
class Computer {
   private $_name = '联想';
   public $_model = 'i7';
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
class NoteComputer extends Computer{


}
//创建接口
interface Person {


}

$computer = new Computer();
$notecomputer = new NoteComputer();
//检测类是否存在 1 或空 
echo class_exists('Computer').'<br/>';
//获取对象类名
echo get_class($computer).'<br/>';
//获取类中公有9(public)的方法,内置的也可以获取
print_r(get_class_methods('Computer'));//或者 $computer
echo '<br/>';
//获取类中的公有(public)字段
print_r(get_class_vars('Computer'));
echo '<br/>';
//获取子类的父类
echo get_parent_class('NoteComputer').'<br/>';//或者 $notecomputer
//判断接口是不是存在
echo interface_exists('Person').'<br/>';// 1 或者 空
//判断对象是不是这个类的
echo is_a($computer , 'Computer').'<br/>';
//判断是不是这个对象的父类
echo is_a($notecomputer , 'Computer').'<br/>';
//确定是不是类的子类
echo is_subclass_of($notecomputer, 'Computer').'<br/>';
//确定对象的方法是不是存在
echo method_exists($computer, '_run');
?>