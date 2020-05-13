/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-27 08:40:04
 * @version $Id$
 */
/*
window.onload = function (){
	var box = document.getElementById('box');
	console.log(box.nodeName); //获取节点标签名，和tagName 等价
	console.log(box.nodeType);     //获取元素节点的类型值
	console.log(box.nodeValue);     //获取节点值  标签节点没有值

	//当前元素的所有节点
	//console.log(box.childNodes.length); //3个节点  哈哈<em>倾斜</em>结尾
	//第一个子节点： 哈哈 			（文本节点）
	//第二个子节点：  <em>倾斜</em>  （元素节点）
	//第三个子节点： 结尾 			（文本节点）


	//第一个子节点（文本节点）
		console.log(box.childNodes[0]);//Object Text 文本节点对象
		console.log(box.childNodes[0].nodeName);//#text 表示文本节点名
		console.log(box.childNodes[0].nodeType);//3 表示文本节点
		console.log(box.childNodes[0].nodeValue);// 哈哈 （innerHTML 无效）必须在当前节点操作
	
	//通过判断节点来实现不同功能
	for(var i=0;i < box.childNodes.length;i++){

		if(box.childNodes[i].nodeType === 1){
			console.log('元素节点标签名：'+box.childNodes[i].nodeName);
		}else if(box.childNodes[i].nodeType === 3){
			console.log('文本节点内容：'+box.childNodes[i].nodeValue);
		}
	}
	//nodeValue 赋值的时候会转义HTML标签  <strong>55</strong> => 结果 <strong>55</strong>
	//innerHTml 赋值不会转仪HTMl标签      <strong>55</strong> => 结果  55
};

//节点属性
window.onload = function (){
	var box = document.getElementById('box');
	console.log(box.parentNode);// HTMLBodyElement 当前节点的上一个节点
	console.log(box.firstChild.nextSibling.nodeName); //下一个同级节点的标签名 EM
	console.log(box.lastChild.previousSibling.nodeName); //上一个同级节点的标签 EM

};

window.onload = function (){
	var box = document.getElementById('box');

	console.log(box.attributes);//集合数组 ，保存着这个元素节点的属性列表

	console.log(box.attributes[0].nodeType);// 2 属性节点的属性值

	console.log(box.attributes[0].nodeValue);// box  (IE 标题)

	console.log(box.attributes[0].nodeName);// id (IE title)
};
*/


window.onload = function (){
	var box = document.getElementById('box');
	console.log(box.childNodes.length);//以前IE和其他浏览器显示不同，现在不会了
};
