/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-26 14:07:59
 * @version $Id$
 */

 //循环里匿名函数的取值问题

/* 
function box(){

 	var ar = [];
 	for (var i=0; i<5;i++){
 		ar[i]=function (){
 			return i;
 		}
 	}
 	//循环执行完毕 ，i最终 4++ = 5，那么最终就是5
 	return ar;
 };

 console.log(box()[0]());//只会打印出了最后一个值

 console.log(box().length);//arr长度
 */

 //改 
 /*function box(){

 	var ar = [];
 	for (var i=0; i<5;i++){
 		ar[i]=(function (num){	//通过自我及时执行
 			return num;
 		})(i);
 	}
 	return ar;
 };

 var b =box();
 for (var i=0;i<5;i++){
 	console.log(b[i]);
 }*/
 //改二

/* function box(){

 	var ar = [];
 	for (var i=0; i<5;i++){
 		ar[i] = function (num){	//通过自我及时执行

 			//num其实在这里
 			return function (){  //匿名闭可以将变量留扎在内存中，相当于demo1变量累计的例子
 				return num;
 			}
 		}(i);
 	}
 	return ar;
 };

 var b =box();
 for (var i=0;i<5;i++){
 	console.log(b[i]());
 }*/

 //闭包中 this 指向的是 window

/*var user = '小沫';
 var box = {
 	user : '小沫 Box',
 	getThis : function(){
 		//这里this 是 box
 		var that = this;
 		return function (){
 			//这里是window
 			return that.user;//this.user指向window
 		}
 	}
 };

 //console.log(box.getThis()());//指向了全局变更量小沫
console.log(box.getThis()());//使用thit.user变成了指向了 box
 //让闭包中的this指向原来的

//2，对象冒充 解决这个问题
// console.log(box.getThis().call(box));//指向了box*/

//内存泄漏

function box(){

	var oDiv = document.getElementById('oDiv');
	var text =oDiv.innerHTML;
	oDiv.onclick =function () {

		console.log(text);
	};
	oDiv = null;//解除引用，等待垃圾回收
};
box();
