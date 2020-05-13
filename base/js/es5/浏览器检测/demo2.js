/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-26 21:37:19
 * @version $Id$
 */
//能力检测
/*
var width = window.innerWidth;
if(typeof width != 'number'){
	width = document.documentElement.clientWidth;
};
console.log(width);
//怪癖检测
var box = {
	toString : function(){  //IE以前的Bug

	}
} 
for(var o in box){
	console.log(o);
};
*/
//代理信息检测
console.log(window.navigator.userAgent);

/*
	IE -- Trident // IE 8 以上 
	Firefox -- Gecko
	Opera -- Presto //旧版本没有体现
	Chrome -- WebKit //WebKit是KHTML呈现引擎的一个分支
	Sanfari -- WebKit 
	Konqueror -- KHTML  //linux下的一个浏览器

*/

var client = function(){  //创建一个对象
	//引擎
	var engine ={
		IE : false,
		Gecko : false,
		WebKit : false,
		KHTML : false,
		Opera : false,

		//引擎的版本
	    ver ： 0,
	};
	//浏览器

	//系统

	return {    //返回一个对象
		engine ：engine,
		
	};
}();//自我执行并赋值
console.log(client);

