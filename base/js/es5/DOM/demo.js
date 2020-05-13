/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-26 22:45:27
 * @version $Id$
 */
 /*
 	DOM (必须等待HTML文档加载结束),所以可以放在文档后面或者用onload事件来加载
	D 文档 O 对象 M 模型

	节点分三类 --- <div id='box'>哈哈</div>
	1,  元素节点  其实就是标签            <div> </div>
	2,  属性节点  其实就是标签的属性       id='box'
  3,  文本节点  其实就是标签内的纯文本   哈哈
*/


//查找元素

/*
  (建议区分出大小写)

  节点属性
  tagName   节点标签名(不可以改变)
  innerHTML 获取元素的内容包含HTMl标签（可以设置改变）

  HTML属性 （都可以进行设置改变）
  id     	    节点id名
  title   	  节点title属性值
  style       CSS内联样式属性值，返回一个对象
  className   CSS元素的类


document.getElementById()获取特定ID的节点,不存在返回null,存在返回对象，

window.onload = function (){
	var box = document.getElementById('box');	
	console.log('节点标签名：'+box.tagName);
	console.log('元素的内容：'+box.innerHTML);
	console.log('id名：'+box.id);
	console.log('自定义属性值：'+box.dd);//无法获取 undefined
	console.log('title属性值：'+box.title);
	console.log('CSS内联样式属性值：'+box.style.color);//返回style对象color的值
	console.log('CSS元素的类：'+box.className);
};

	document.getElementsByTagName();	//获取相同 元素 的节点列表

window.onload = function (){
	var li = document.getElementsByTagName('li');//li标签
	//li[0]返回对象或者 li.item(0)
	console.log(li.length);
	console.log(li[0].innerHTML);//第一个li里面的内容
};

window.onload = function (){
	var body = document.getElementsByTagName('body');//body标签
	body[0];//返回对象或者 li.item(0)
	console.log(body.length);
	console.log(body[0].innerHTML);//body里面的内容
};


window.onload = function (){
	var all = document.getElementsByTagName('*');//所有标签
	//all[0]返回对象或者 li.item(0)
	console.log(all.length);//标签个数
	console.log(all[0].tagName);//返回 'HTML'
	console.log(all[0].innerHTML);//HTML标签里面的内容
};

	document.getElementsByName();	//获取相同 名称 的节点列表

window.onload = function (){
	var box = document.getElementsByName('div1');
	console.log(box.length);//标签个数
	console.log(box[0].id);//id名字
	console.log(box[0].className);//className名字
};


getAttribute();	//获取特定元素节点属性的值


window.onload = function (){
	var box = document.getElementById('box');
	console.log(box.getAttribute('dd'));//可以获取自定义标签值(id等这些都可以（iE不可以获取class,要className）)
	//style 非IE返回字符串，IE返回的是对象（IE8修复了）
	console.log(box.getAttribute('className') || box.getAttribute('class'));
};

window.onload = function (){
	var box = document.getElementById('box');
	console.log(box.onclick);//返回函数式
	console.log(box.getAttribute('onclick'));//IE8一下不兼容，其他返回 a();
};


	setAttribute(,);	//设置特定元素节点的属性（IE 8 以下style class沒用）

window.onload = function (){
	var box2 = document.getElementById('box2');
	box2.setAttribute('placeholder','请输入你的姓名');//创建一个标签给其賦值自定意也可以
};

  removeAttribute();  //移除特定元素节点的属性（IE6 以下沒用）
*/


window.onload = function (){
	var box = document.getElementById('box');
	box.removeAttribute('style');//移除style
};




