<?php
/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-21 18:57:38
 * @version BUG 1.0.0
 */
//封装 类放在堆区
	@header("charset=utf-8");
	class Computer {
	    private $_name,$_model,$cpu;//私有字段
	    //常量,大写,不可以改变的值
	    const CLNAME = 'dell';
	    //静态字段
	     public static $_jt = 0;
	    
	    //$this 可以代表 Computer
	    //构造方法,不用调用,新建对象就运行了
	    function __construct(){
	    	$this -> _name = '联想';
	    	$this -> _model= 'i5';
	    	$this -> _cpu= '四核';
	    }
	    //设置私有也会执行时因为这时候指针已经在内里面了，会自动搜寻__set 或者 __get 方法，设置私有是防止暴露出来可执行
	    //__set拦截器方法赋值，传两个变量
	    function __set($_key,$_value){
	    		$this -> $_key = $_value;
	    }
	    //__get方法取值
	    function __get($_key){
	        return $this -> $_key;
	    }
	    
	    //自定义方法，公有
	    public function _run(){
	       $ret = 123;
	       echo 123;
	    }
	    //静态方法
	    public static function _add(){
	    	self::$_jt++;//累加
	    }
	    //析构方法 ，一般数据库，她是在最后执行的，不用调用的
	    function __destruct(){
	        echo '<br/>运行结束';
	    }
	}
	$computer = new Computer();//新建对象，放在栈区
	//赋值
	$computer -> _name ='华硕';//通过__set传给_name字段
	$computer -> _model ='i5';
	$computer -> _cpu ='六核';
	//取值
	echo $computer -> _name;//通过__get获取_name字段的值
	echo $computer -> _model;
	echo $computer -> _cpu;

	echo '<br/>';
	
	//输出常量
	echo Computer::CLNAME;

	echo '<br/>';
	//静态方法,有时候需要所有的类共享的,储存在数据区
	echo Computer::$_jt.'<br/>';//静态的不会自动放内存，值是共享的
	echo Computer::_add();
	echo Computer::$_jt.'<br/>';//静态的不会自动放内存，值是共享的

	//判断对象是不是引用的特定类 是 1 否 空
	echo ($computer instanceof Computer);
?>