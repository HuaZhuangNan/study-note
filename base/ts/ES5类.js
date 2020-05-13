

// ES5 的继承

function Person(name,age){
  this.name = name; // 属性
  this.age = age;
  this.run = function(){ // 实例方法
    console.log(this.name+"在运动！")
  }
}
Person.prototype.sex ="男";
Person.prototype.work = function (){
  console.log(this.name+"在工作")
}

// 1.对象冒充和原型链继承实现完
function Web(name,age){
  Person.call(this,name,age);//对象冒充继承(缺点：不可以继承原型链)
}
// Web.prototype = new Person(); // 原型链继承(缺点：不可以传参)

var w = new Web("赵四",20); // 实例化

w.run();
w.work();

// 2.另一种写法
Web.prototype = Person.prototype;  // 结合冒充继承 