
/*
 window.onload = function(){
 	var box = document.getElementById('box');
 	var p = document.createElement('p');//创建一个P节点
 	box.appendChild(p);//将节点添加到id=box里的子节点列表的末尾上

 	var text = document.createTextNode('测试体添加p');
 	p.appendChild(text);//将文本添加到p节点中
 };

//将特定标签添加到到特定标签前
window.onload = function(){
 	var box = document.getElementById('box');
 	var p = document.createElement('p');//创建一个P节点
 	//跳转到父节点.在添加
 	box.parentNode.insertBefore(p,box);
 	var text = document.createTextNode('测试体添加p');
 	p.appendChild(text);//将文本添加到p节点中
 };

//将特定标签添加到特定标签后
window.onload = function(){
 	var box = document.getElementById('box');
 	var p = document.createElement('p');//创建一个P节点
 	//调用自己函数
 	insertAfter(p,box);
 	//insertAfter(p,box);//把p标签放到p3后面
 	var text = document.createTextNode('测试体添加p');
 	p.appendChild(text);//将文本添加到p节点中
 };
//自己创建函数实现功能
function insertAfter(newElement,targetElement){
	//得到父接点
	var parent = targetElement.parentNode;
	if(parent.lasChild === targetElement){ //如果父节点最后一个节点是传过来的节点那么直接添加在父标签结尾前就好
		parent.appendChild(newElement,targetElement);
	}
	//获取这个标签的后一个同级标签
	parent.insertBefore(newElement,targetElement.nextSibling);
}

//添加节点属性
window.onload = function(){
 	var body = document.getElementsByTagName('body')[0];
 	var input = document.createElement('input');
 	input.setAttribute('type','radio');
 	input.setAttribute('name','sex');
 	body.appendChild(input);
 };

//替换节点
window.onload = function(){
 	var div = document.getElementsByTagName('div')[0];//获取第一个div节点
 	var em = document.createElement('em');
 	//添加属性
 	em.setAttribute('id','qx');
 	//添加值
 	em.innerHTML='修改节点';
 	//在父节点操作
 	box.parentNode.replaceChild(em,div);
 };


 //复制节点
window.onload = function(){
 	var div = document.getElementById('div2');
 	var clone = box.firstChild.cloneNode(true);//克隆节点 true 标签里面节点内容也复制 false 则相反
 	//修改属性
 	clone.setAttribute('id','qx');
 	//在父节点操作
 	box.appendChild(clone);
 };

 */

 //移除空白节点(自建函数),浏览器兼容问题 
 function removeWhiteNode(node){

 	for(var i=0;i < node.childNodes.length;i++){

 		if(node.childNodes[i].nodeType == 3 && /^\s+$/.test(node.childNodes[i].nodeValue) ){
 			node.childNodes[i].parentNode.removeChild(node.childNodes[i]);
 		}
 	}
 	return node;
 };

 //删除节点
window.onload = function(){
 	var box = document.getElementById('box');
 	//删除 box 的第一个子节点
 	//box.removeChild(removeWhiteNode(box).firstChild);//清除空白节点
 	//删除整个节点
 	box.parentNode.removeChild(box);
 };
