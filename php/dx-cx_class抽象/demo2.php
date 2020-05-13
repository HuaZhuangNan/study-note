<?php
/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-21 21:48:59
 * @version $Id$
 */
/*接口
*1，类全部为抽象方法，但是方法不需要声明 abstract
*2，类抽象方法必须是Public,并且不可以实例化
*3,成员字段必须是常量
* 接口是为了规范它的子类，以达到统一的目的,不可以创建普通方法
如果需要继承多个类的方法规范，就用接口，可以多继承，多实现

如果你要共享一个方法体内容，就用抽象类
*/
//创建

interface  Computer{

	const NAME = 'dello';
	public function _run();
	public function _run2();

}
interface  Computer2{

	public function _run3();

}

//子类继承接口的说法，叫做实现，有多少就要多少实现
class NoteComputer implements Computer,Computer2{
	public function _run(){
		echo '实现了接口_run的方法<br/>';

	}
	public function _run2(){
		echo '实现了接口_run2的方法<br/>';

	}
	public function _run3(){
		echo '实现了接口2_run3的方法<br/>';

	}
}

//打印接口常量
	echo '父类调用'.(Computer::NAME).'<br/>';

	$notecomputer = new NoteComputer();
	$notecomputer -> _run();
	$notecomputer -> _run2();
	$notecomputer -> _run3();
	echo '子类调用'.(NoteComputer::NAME).'<br/>';
?>