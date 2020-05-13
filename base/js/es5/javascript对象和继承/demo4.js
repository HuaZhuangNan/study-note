/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-25 23:25:44
 * @version $Id$
 */

//原型式继承

/*
//临时中转函数
function obj(o){ //表示就一个要传梯的对象
	function F(){};
	F.prototype = o ;//讲对象赋值给F构造的原型对象
	return new F();//最后返回得到传梯过来对象的对象实例
};

//F.prototype = o 相当于 Desk.prototype = new Box();
//相当于 var box = new Box();
var box = {
	username : '小沫',
	age : 100 ,
	family : ['姐姐','哥哥','妹妹']
};

//box1 就等于 new F();

var box1 = obj(box);
console.log(box1.username);
box1.family.push('弟弟');
console.log(box1.family);

var box2 = obj(box);
console.log(box1.family); //引用类型共享了
*/

//寄生式继承 = 原型式 + 工厂模式

//临时中转函数
/*function obj(o){ //表示就一个要传梯的对象
	function F(){};
	F.prototype = o ;//讲对象赋值给F构造的原型对象
	return new F();//最后返回得到传梯过来对象的对象实例
};
//寄生函数
function create(o){

	var f=obj(o);
	f.run = function (){
		return this.username +'方法';//同样会共享

	}
	return f;
};

var box = {
	username : '小沫',
	age : 100 ,
	family : ['姐姐','哥哥','妹妹']
};

var box1 = create(box);
console.log(box1.run());
*/
//寄生组合继承（最终）

//临时中转函数
function obj(o){ //表示就一个要传梯的对象
	function F(){};
	F.prototype = o ;//讲对象赋值给F构造的原型对象
	return new F();//最后返回得到传梯过来对象的对象实例
};
//寄生函数
function create(box,desk){
	var f =obj(box.prototype);
	f.constructor = desk; //调整原型构造指针，指向自己
	desk.prototype = f;
	return f;
};

//动态原型模式
function Box(username,userage){
	this.username = username;
	this.userage = userage;

	if(typeof this.run != 'function'){		//这样就可以防止初始化多次
		Box.prototype.run = function(){
			return this.username+this.userage+'运行中。。。';//重复的更节省内存
		};
	}	
};
//对象冒充 只可以继承构造函数
function Desk(username,userage){
	Box.call(this,username,userage);//对象冒充，只可以继承构造函数里的信息
}
//通过寄生组合来实现继承
create(Box,Desk); //这句话用来替代Desk.prototype =new Box();

var desk1 = new Desk('lee','100');
console.log(desk1.run());


