/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-26 18:15:12
 * @version $Id$
 */

/*

	console.log(window.location);//返回当前地址信息
	console.log(document.location);
	location.hash='#66';//设置瞄点，并跳转
	console.log(location.hash);//瞄点
	location.port='8080';//设置端口，并跳转
	console.log(location.port);//端口
	location.hostname='lee';//设置主机名，并跳转
	console.log(location.hostname);//获取主机名
	location.pathname='lee';//设置当前路径，并跳转
	console.log(location.pathname);//获取当前路径
	location.protocal='ftp';//设置协议，不跳转
	console.log(location.protocal);//获取当前路径
	//location.seach='?id=5';//设置?后的字符串并一直跳转，死循环
	console.log(location.seach);//获取?后的字符串
	location.href='http://www.baidu.com';//设置跳转url
	console.log(location.href);//获取url

*/

//获取?后的字符串并进行一定处理
function getArgs(){
	if(location.search.length > 0){
		var qs = location.search.substring(1);// 截取 ? 后的字符串
		var items =qs.split('&');//分割
		var item =null,name=null,value=null;
		var args =[];
		for(var i=0;i< items.length;i++){
			item = items[i].split('=');//分割
			name = item[0];
			value = item[1];
			args[name]=value;
		}
		return args;//返回获得的数组
	}else {
		return -1;//失败
	}
	
};
//调用判断
if(getArgs() != -1){
	console.log(getArgs());
}else{
	console.log('?号后无数据');
}
 
//location.assign('http://baidu.com')跳转到指定网址

//location.reload();//重新加载，可能从缓存区加载
//location.replace(true);//强制从服务器重新加载
function a(){
	location.replace('http://www.wxwmy.cn');//跳转地址，无历史记录
}


