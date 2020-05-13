/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-25 21:02:10
 * @version Bug 1.0.0
 */
//构造函数，函数名第一个必须要大写
function Box1(name,age){
	this.name=name;	//添加属性
	this.age=age;
	this.run=function(){	//添加一个方法
		return this.name+this.age+'运行中。。。';
	};
};
var box1 = new Box1('小沫',20);//实例化，小写
delete box1.name;//删除实例属性
//console.log;
//判断实例中有没有 box1.hasOwnProperty('name');有 true 否 false
// 'name' in box1 ; true 实例或者原型中有
// 只有原型有 !box1.hasOwnProperty('name') && ('name' in box1)




//使用对象实例无法访问prototype 必须要对象实例指针 box.__proto__

//可以使用构造函数名访问prototype  Box2.prototype
//原型数据一般用覆盖不删除

//原型（prototype）
//使用字面量创建原型对象，这里{} 就是对象，是Object， new Object 相当于{}
//最后不会指向实例 Box2
function Box2(){};
Box2.prototype = {
	constructor : Box2 ,	//使用这句话可以强制指向Box2
	name : '小沫',
	age : '20',
	run : function(){
		return this.name+this.age+'运行中。。。';
	} 
};

var box2 = new Box2();
console.log(box2.run);//打印函数
console.log(box2.run())//打印结果
console.log(box2.constructor)//输出函数属性

Box2.prototype ={
	age: 200 //这样写会把原型信息切断，只有这一个了
}

//内置对象也有原型数据

//数组排序
var box =[5,6,8,9,4,5,6];
console.log(box.sort());

//原型查找
console.log(Array.prototype.sort);
//原型对象添加(内置引用功能扩展)
//不建议使用
if(!String.prototype.addstring){  //判断原型中是否存在这个方法
	String.prototype.addstring= function(){
		return this+'被添加了！';
	}
};

//使用添加的属性
console.log('lee'.addstring());
//返回 lee被添加了！