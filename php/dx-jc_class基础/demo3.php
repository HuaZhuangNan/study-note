<?php
/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-21 21:13:54
 * @version $Id$
 */

//父类
	class Computer {
		protected $_name = '联想';//表示受保护的修饰符封装不用私有的 private 

		protected function _run() {
			echo '父类运行';
		}
		
	}


	class NoteComputer extends Computer {

	    public function _getTOP(){
	    	echo $this -> _name;
	    	echo $this -> _run();
	    }
	}

	//子类实例化
	$notecomputer = new NoteComputer;
	$notecomputer -> _getTOP();

?>