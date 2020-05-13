<?php
/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-21 22:24:44
 * @version $Id$
 */

//多态就是多种状态，不要修改类，只要调用参数更改就会不同结果
//一个动作由不同人执行，产生不同结果
//一个人通过不同的状态执行同个松动作，产生不同结果

//创建一个接口
	 interface Computer{
	 	public function version();//啥电脑
	 	public function work();//咋样工作


	 }
	//创建一个类1实现
	class NoteComputer implements Computer {
		public function version(){
			echo '笔记本';
		}
		public function work(){
			echo '可以手提运行widows7';

		}
	}
	//创建一个类2实现
	class DesktopComputer implements Computer {
		public function version(){
			echo '台式机';
		}
		public function work(){
			echo '在工作站运行XP';

		}
	}
	//创建一个用户 
	class Person{
		public function _run($type){
			//调用方法
			echo '这个人的';
			$type ->version();
			$type ->work();
		}

	}


	//有一个接口两个类
	//类一对象
	$notecomputer = new NoteComputer();


	//类二对象
	$desktopcomputer = new DesktopComputer();

	//使用

	//创建使用者
	$person = new Person();

	//开始使用类二

	$person -> _run($desktopcomputer);//对象传递,持有对方的引用


 ?>