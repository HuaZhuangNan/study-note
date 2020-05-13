
/*
//超时调用
	可以是字符串，里面是代码块
	setTimeout("console.log('2秒后执行')",2000);//这种写法不推荐


//提倡写法
var box = setTimeout(function (){  //返回值是超时调用的ID

	console.log('2秒后执行')

},2000);

//取消当前调用计划 clearTimeout(box);


//间歇调用，不断执行

var box = setInterval(function (){  //返回值是超时调用的ID

	console.log('1秒钟执行一次')

},1000);
//取消当前调用计划 clearInterval(box);


//定时器一
window.onload = function (){
	var num =0;
	var max =3;
	var box=setInterval(function (){  //返回值是超时调用的ID
		num++;
		document.getElementById('a').innerHTML += num;
		if(num == max){
			clearInterval(box) //this表示本身，无效
			console.log('3秒钟到了')
		}
	},1000);
}
*/
//定时器二
	var num =0;
	var max =3;
function box (){
	num++;
	document.getElementById('a').innerHTML += num;
	if(num == max){
		console.log('3秒钟到了')
	}
	else {
		setTimeout(box,1000)
	}
}
setTimeout(box,1000);