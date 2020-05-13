/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-26 20:03:17
 * @version $Id$
 */


console.log(history.length);//获取是否有历史记录总量个数

function back(){
	history.back();  // 返回
} 
function forward(){
	history.forward();  // 前进
}

function go(num){
	history.go(num);//num为负数下页，num为正数上页
}
