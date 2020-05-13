


console.log(typeof document.cookie);//string

//写入Cookie(编码后),如果不设定失效时间就时浏览器关闭就是失效
//完整形式
//document.cookie = 'user=值；(可选参数)[expires=失效时间;path=限制路径访问；domain=域名访问；secure安全的https限制通信]'
document.cookie="user="+encodeURIComponent("陌轩痕");
//读取Cookie(也可以获取之前写的)
console.log(decodeURIComponent(document.cookie));
//删除Cookie(时间过期方法)
document.cookie="user="+encodeURIComponent("陌轩痕")+";expires="+new Date(0);
//路径就是限制路径下的才可以访问
document.cookie="user="+encodeURIComponent("陌轩痕")+";expires="+new Date(0);
//域名设置，即使不设置会自动绑定当前域名
//secure只可以死https



