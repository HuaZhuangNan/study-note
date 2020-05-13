/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-26 14:51:47
 * @version $Id$
 */

//块级作用域（私有作用域）

/*function box(){
	(function (){
		for (var i=0;i<5;i++){  //包含自我的执行匿名函数，出了就销毁了
			console.log(i);
		}

		//这里就销毁了
	})();
	//console.log(i);已经不存在了
};

box();


//
(function (){
	//这里就是全局私有作用域
	var age =200;
	console.log(age);
		//这里就销毁了
})();
//console.log(age);//会报错,因为已经被销毁了


//私有变量

function box2(){
	var age = 100; //私有变量
}*/


//
/*
function Box(){
	var age = 100;			//私有变量
	function run(){  //私有函数
		return '运行中';
	};

	this.punblicGo = function (){   //对外的接口，特权方
		return age+run();

	}
};

var box = new Box();

console.log(box.punblicGo());*/

//使用构造函数传参
/*function Box(value) {

	var user = value;
	this.getUser = function (){
		return user;
	};
	this.setUser = function (value){
		user = value;
	}
}

var box = new Box('小沫');
console.log(box.getUser());
box.setUser('哈哈');
console.log(box.getUser());*/

//静态私有，就是共有的
/*(function (){
	var user =''	//私有变量
	Box =function Box(value){   //构造函数，但在函数里写构造函数，不支持，因为是私有作用域的函数
		user = value;
	};//全局构造函数
	Box.prototype.getUser =function(){
		return user;
	}
	Box.prototype.setUser = function(value){
		user =value;
		
	}
})();

var box = new Box('小沫');
console.log(box.getUser());
var box2 = new Box('哈哈');
console.log(box.getUser());
box2.setUser('您核对');
console.log(box.getUser()); */
/*
//模块模式,单例，就是永远只实例化一次，其实就是字面量对象声明方式

var box ={   //第一次实例化，无法第二次实例化
	user : 'lee',
	run : function (){
		return '运行中..';
	}
}

*/
//私有化函数和变量
/*var box = function (){
	var user = 'lee';
	function run(){
		return '运行中。。。';
	}
	var obj = {
		publicGo : function (){ //对外公共接口方法
			return user + run();
		}
	}; 
	return obj;
}();

console.log(box.publicGo());*/

//增强的模块模式

var box = function (){
	function Desk(){};
	var user = 'lee';
	function run(){
		return '运行中。。。';
	}
	var desk = new Desk(); //可以实例化特定对象
	desk.publicGo = function (){
		return user + run();
	};
	return desk; 
}();

console.log(box.publicGo());