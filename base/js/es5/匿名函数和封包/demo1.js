/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-26 13:41:29
 * @version $Id$
 */

//匿名函数赋值给变量
var box = function (){

	return '小沫';
};

console.log(box());

//通过自我执行匿名函数,第一个括号放函数的二个括号执行
(function (){
	console.log('lee');
})();

//把匿名函数返回值赋给box
var box = (function (){

	return 'lenen';
})();
console.log(box);

//自我执行传参
(function (username){
	console.log(username);
})('小李');

//函数里放一个匿名函数

function box2(){
	return function (){  //闭包
		return '陌沫';
	}
};

console.log(box2()());

//把匿名函数赋值给b
var b = box2();
console.log(b());

//通过闭包返回局部变量

function box3(){

	var age = 100;
	return function (){  //闭包
		return age;
	}
};
console.log(box3()());

//使用全局变量可以累加
//使用局部变量不可以实现累加
//使用匿名函数实现局部变量累加
function box4(){

	var age = 200;
	return function (){  //闭包
		return age++;
	}
};
var a = box4();
console.log(a());
console.log(a());
console.log(a());
b = null;//解除引用，等待回收