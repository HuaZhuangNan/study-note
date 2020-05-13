<?php
/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-21 21:31:28
 * @version $Id$
 */

//创建一个抽象类 在普通类前加 abstract,不可以创建对象实例化，是给子类继承的和资源共享

//只有类里面有抽象方法，就必须要抽象类
//抽象类里面必须有一个抽象方法，而且必须继承
//可以有成员字段 ，可以调用
//类不可以多继承，只支持单继承
	abstract class Computer {
		//抽象方法不能实现方法体类的方法
		abstract public function _run();

		//抽象类里面可以创建一个普通方法
		public function _run2(){

			echo '我是抽象父类的普通方法<br/>';
		}

	}
	class NoteComputer extends Computer{
		//抽象类里的抽象方法子类必须重写,不然报错
		//抽象类里的普通方法不用重写，子类会直接继承
		public function _run(){
			echo '我是子类重写父类抽象_run的方法<br/>';
		}
	}

	$netcomputer = new NoteComputer();
	$netcomputer -> _run2();
	$netcomputer -> _run();


?>