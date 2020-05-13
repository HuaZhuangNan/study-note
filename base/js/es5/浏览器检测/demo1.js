/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-26 20:14:33
 * @version $Id$
 */

// IE 和 火狐显示的有点不同 navigator 对象是widow下的
console.log('浏览器名称：'+window.navigator.appName);//没有
console.log('浏览器版本：'+window.navigator.appVersion);//版本
console.log('浏览器用户代理字符串：'+window.navigator.userAgent);//表示浏览器信息
console.log('浏览器所在的系统：'+window.navigator.platform);

//浏览器嗅探器
console.log('浏览器的名称:'+BrowserDetect.browser);// 浏览器的名称，例如Firefox，IE
console.log('浏览器的版本:'+BrowserDetect.version);//浏览器的版本，比如，7、11
console.log('操作系统：'+BrowserDetect.OS);//浏览器所宿主的操作系统，比如Windows、Linux

//插件检测
console.log(window.navigator.plugins.length);//插件数量

for(var i=0;i<navigator.plugins.length;i++){
	console.log('插件名：'+navigator.plugins[i].name);
	console.log('文件名：'+navigator.plugins[i].filename);
	console.log('描述：'+navigator.plugins[i].description);
}

//检测非IE浏览器是否存在

function hasPlugin(name){
	var name =name.toLowerCase();//转化大小写
	for(var i=0;i< navigator.plugins.length;i++){
		if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
			return true;
		}
	}
	return false;
};

console.log(hasPlugin('Flash'));//默认不开启

//检测IE控件
function hasIEPlugin(name){
	try{				//尝试运行，错误就执行catch
		new ActiveXObject(name);   //这里的name必须是控件的唯一标识符ID
		return true;
	}catch(e){
		return false;  //如果new失败就执行这里
	}
};
console.log(hasIEPlugin('ShockwaveFlash.ShockwaveFlash'));


function hasFlash(){	
	//首先检测非IE的浏览器
	var result = hasPlugin('Flash');//如果返回true,检测到了，并且说明不是IE，没有就是没安装或者IE浏览器
	if(!result){
		result = hasIEPlugin('ShockwaveFlash.ShockwaveFlash');
	}
	return result;
}
console.log(hasFlash());

//mime类型
console.log(navigator.mimeTypes.length);