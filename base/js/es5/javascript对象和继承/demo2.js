/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-25 22:07:55
 * @version $Id$
 */
//原型函数有几个问题
//
//不可以传参 ，如果第一个修改了，第二个也修改了

/*function Box() {}
Box.prototype = {
	constructor : Box, //使用这句话可以强制指向Box
	name : '小沫',
	age : '20',
	run : function(){
		return this.name+this.age+'运行中。。。';
	} 
};

var box = new Box();
console.log(box.name);
*/
//解决办法 构造函数(保持独立的字段)和原型函数（保持共享的）一起使用

/*function Box(username,userage){
	this.username = username;
	this.userage = userage;
};
Box.prototype = {
	constructor : Box,
	run : function(){
		return this.username+this.userage+'运行中。。。';//重复的更节省内存
	} 
};
var box1 = new Box('小沫','15');
console.log('名字：'+box1.username+'年龄:'+box1.userage+' '+box1.run());
var box2 = new Box('陌抹','20');
console.log('名字：'+box2.username+'年龄:'+box2.userage+' '+box2.run());*/

//动态原型模式，但是又要防止原型初始化多次，但是原型只要初始化一次 (更符合对象封装规定)
function Box(username,userage){

	this.username = username;
	this.userage = userage;

	if(typeof this.run != 'function'){		//这样就可以防止初始化多次
		Box.prototype.run = function(){
			return this.username+this.userage+'运行中。。。';//重复的更节省内存
		};
	}
	
};

var box=new Box('45','64');
//console.log(box.constructor)//打印了整个函数

//寄生构造函数 不能确定对象，不提倡
/*function Box2(username,userage){
	var obj =new Object();
	obj.username = username;
	obj.userage = userage;
	obj.run = function {
			return this.username+this.userage+'运行中。。。';//重复的更节省内存
	}
	return obj;
};
var box=new Box2('45','64');

*/
//稳妥构造函数
/*function Box2(username,userage){
	var obj =new Object();
	obj.username = username;
	obj.userage = userage;
	obj.run = function {
			return this.username+this.userage+'运行中。。。';//重复的更节省内存
	}
	return obj;
};
var box=Box2('45','64');*/

