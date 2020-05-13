<?php
/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-21 22:57:11
 * @version $Id$
 */
//引入文件调用类
//require 'computer-class.php';

/*如果包含多个类文件咋办？
//引入文件浪费呢？
//创建对象没引入呢？
可以用__autoload魔术方法,只要使用了那个对象实例化就会出现在里里面，可以多个
*/

function __autoload($_className){
	require strtolower($_className).'-class.php';//转化小写
}


$computer = new Computer();
echo $computer -> _name;



?>