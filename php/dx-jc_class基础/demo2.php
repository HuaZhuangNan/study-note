<?php
/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-21 20:57:36
 * @version $Id$
 */

//不支持重载
	
	//父类
	class Computer {
		public $_name = '联想';

		public function _run() {
			echo '父类运行';
		}
		public function _add() {
			return '父类运行_add';
		}

		
	}

	//子类,继承父类方法，可以改变父类的字段和方法(但是父类还在并没有改变),记得要公有public才可以
	class NoteComputer extends Computer {
		public $_name = '戴尔';

		public function _run() {
			echo '子类运行';
			echo Computer::_add;//调用父类方法--过时了，少用
			echo parent::_add;//新方法，推荐
		}
	}

	//子类实例化
	$notecomputer = new NoteComputer;
	echo $notecomputer -> _name;
	$notecomputer -> _run();

?>