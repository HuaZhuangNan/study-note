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
var xmlDom = new ActiveXObject();