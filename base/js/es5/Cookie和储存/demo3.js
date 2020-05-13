var DEFAULT_VERSION = 8.0;
var ua = navigator.userAgent.toLowerCase();
var isIE = ua.indexOf("msie")>-1;
var safariVersion;
if(isIE){
safariVersion =  ua.match(/msie ([\d.]+)/)[1];
}
if(safariVersion < DEFAULT_VERSION ){
  alert('系统检测到您正在使用ie8以下内核的浏览器，不能实现完美体验，请更换或升级浏览器访问！')
};

/*
//其他储存sessionStorage(一般为5M左右)(IE不支持)(会话储存，关闭页面就清除)
sessionStorage.setItem("key", "value");
console.log(sessionStorage.getItem("key"));
//指定删除
sessionStorage.removeItem("key");
//全部清除
sessionStorage.clear();
*/

//其他储存localStorage(一般为5M左右)(IE不支持)(除非清除不然一直都在)
window.localStorage.setItem("site", "hh");
alert(window.localStorage.getItem("site"));
//指定清除
window.localStorage.removeItem("site");
//全部删除
window.localStorage.clear();
