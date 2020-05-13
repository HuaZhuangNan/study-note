/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-26 17:14:03
 * @version $Id$
 */



//window.screenLeft
//window.screenTop
//火狐不支持,是数字类型,但是火狐有替代的
//console.log(window.screenLeft);
//console.log(window.screenTop);
//火狐，谷歌
//console.log(window.screenX);
//console.log(window.screenY);

//获取浏览器可视窗口大小

//可见宽口大小
//IE不支持
//console.log(window.innerWidth);
//console.log(window.innerHeight);
//窗口+边框 ，谷歌outerWidth=innerWidth
//console.log(window.outerWidth);
//console.log(window.outerHeight);

//IE不支持就是用
/*
var width = window.innerWidth;
var height = window.innerHeight;

	if(typeof width != 'number')
	{
		if(document.compatMode == 'CSS1Compat'){  //判断如果是标准模式

			width = document.documentElement.clientWidth;
			height =document.documentElement.clientHeight;
		}else {
			width = document.body.clientWidth;
			height =document.body.clientHeight;
		}
	};

	console.log(width);
	console.log(height);

//现在只有IE原版支持
moveTo(100,100);//移动位置
moveBy(10,10);

resizeTo(300,300);//调整窗口大小
resizeBy(300,300);//调整窗口大小
*/
