/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-27 11:11:44
 * @version $Id$
 */

window.onload =function (){
	if(typeof Node =='undefined'){ //兼容 IE9 以下
		window.Node = {
			ELEMENT_NODE : 1,
			TEXT_NODE : 3
		};
	}else{
		console.log(Node);//节点类型(IE 9 以上)
	}
	console.log('元素节点类型值：'+Node.ELEMENT_NODE);//表示元素节点类型值
	console.log('文本类型节点值：'+Node.TEXT_NODE);//表示文本类型节点值
};