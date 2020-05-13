/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-25 22:43:07
 * @version $Id$
 */

/*
function Box(){		//被继承的函数叫超类型（基类，父类）
	this.username ='小沫';
};
Box.prototype.username ='55';
function Desk(){		//继承的函数叫子类型（派生类，子类）
	this.userage = 100;
};

//通过原型链继承,超类型实例化后的对象失恋了，赋值给类型的原型对象即可
//new Box() 会把实例和原型都交给 Desk.prototype(原型)

Desk.prototype = new Box();
var box = new Box();
var desk = new Desk();
console.log(desk.username);//小沫 就近原则 ，实例如果有就先用实例 没有就用 原型

//子类型从属于自己或者超类型
console.log(desk instanceof Desk); //true
console.log(desk instanceof Box); //true
console.log(box instanceof Desk); //false
*/

//对象冒充+原型链（只可以继承构造函数里的信息）

function Box(username,userage){		//被继承的函数叫超类型（基类，父类）
	this.username = username;
	this.userage = userage;
	this.family = ['哥哥','姐姐','弟弟']; //引用类型就放在构造里面
};

//够造函数里的方法一般放在原型例，保证多次实例化只有一个地址
Box.prototype.run = function(){
	return this.username+this.userage+'运行中。。。';//重复的更节省内存
};

function Desk(username,userage){
	Box.call(this,username,userage);//对象冒充，只可以继承构造函数里的信息

}
Desk.prototype = new Box();//原型链继承也拿过来就可以继承原型的方法了
var desk = new Desk('小沫','100');
console.log(desk.username);
console.log(desk.run());