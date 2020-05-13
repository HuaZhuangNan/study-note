//浏览器检测 基本兼容了大部分浏览器
(function (){
  var w = "";
  var wv = [];//放版本
  var s = "";//放系统
  var sv = [];//放版本位数信息
  var ua = navigator.userAgent.toLowerCase();//获取浏览器信息字符串并转化为小写
  //web 版本
  if(ua.indexOf("firefox") != -1){  //火狐
    w = "火狐(Firefox)";
    wv = ua.match(/firefox\/([\d.]+)/); // firefox/63.0,63.0
     // (windows nt 10.0; wow64; rv:63.0)
  }else if(ua.indexOf("msie") != -1 || ua.indexOf("rv") != -1){  //IE
    w = "IE";
    wv = ua.match(/msie\s([\d.]+)/) || ua.match(/rv:([\d.]+)/); //mise 8.0,8.0  IE 11 是rv
  }else if(ua.indexOf("opera") != -1 || ua.indexOf("opr") != -1){  //opera 里面有谷歌、safari
    w = "Opera"; //opr/54.0.2952.71 
    wv =  ua.match(/opr\/([\d.]+)/) || ua.match(/version\/([\d.]+)/) || ua.match(/opera\/([\d.]+)/);
  }else if(ua.indexOf("edge") != -1){  //Edge/15.15063 里面有谷歌、safari
    w = "Edge"
    wv = ua.match(/edge\/([\d.]+)/) //
  }else if (ua.indexOf("qqbrowser") != -1){  //谷歌
    w = "QQ浏览器";
    wv = ua.match(/qqbrowser\/([\d.]+)/);
  }else if (ua.indexOf("chrome") != -1){  //谷歌
    w = "谷歌(Chrome)";
    wv = ua.match(/chrome\/([\d.]+)/);
  }else if(ua.indexOf("safari") != -1){  //safari
  	w = "Safari"
  	wv = ua.match(/version\/([\d.]+)/) || ua.match(/safari\/([\d.]+)/); //version/11.1.2
  }
  //PC系统
  if(ua.indexOf("window") != -1){  //Window
    s = "Window电脑"; //Windows NT 10.0; Win64; x64
    sv = ua.match(/[a-z]+\s[a-z]+\s([\d.]+);\swow([\d]+)/) || ua.match(/windows\snt\s([\d.]+);\swin([\d]+)/) || ua.match(/windows\snt\s([\d.]+)/);
    if(sv != null) switch(sv[1]){
      case "5.1": sv[1] = "XP";
        break;
      case "5.2": sv[1] = "XP";
      	break;
      case "6.0": sv[1] = "Vista";
      	break;
      case "6.1": sv[1] = "7";
      	break;
      case "6.2": sv[1] = "8";
        break;
      case "6.3": sv[1] = "8.1";
        	break;
      default: sv[1] = sv[1];
    }
  }else if(ua.indexOf("macintosh") != -1 || ua.indexOf("mac os") != -1 && ua.indexOf("cpu") == -1){  //谷歌
    s = "苹果电脑(MAC OS)";
    sv = ua.match(/[a-z]+\s[a-z]+\s[a-z]?\s([\d_|.]+)/);
    if(sv != null) sv[1] = sv[1].replace(/\_/g,'.');
  }else if(ua.indexOf("android") != -1){
    s = "Android";
    sv = ua.match(/\s?[a-z]+\s([\d.]+);(\s*)/);
  }else if(ua.indexOf("linux") != -1){  
    s = "Linux";
    if(ua.indexOf("ubuntu") != -1) s = "Ubuntu";
    if(ua.indexOf("debian") != -1)  s = "Debian";
    if(ua.indexOf("cros") != -1)  s = "ChromiumOS";
    //linux 2.6.26-1-amd64 
    //X11; Linux x86_64 | x11; u; linux x86_64; 
    //x11; linux i686  
    //msie 8.0; linux armv6l
    sv = ua.match(/[a-z]+\s([\d.]+)\-[\d]\-([a-z]+[\d]+)/) 
    || ua.match(/[a-z]?([\d]+);\s?u?;?\s[a-z]+\s([a-z][\d]+\_?[\w]+)/) 
    || ua.match(/;(\s)linux\s([a-z]+[\w]+)/);  
  }else if(ua.indexOf("iphone") != -1){
    s = "iphone";
    sv = ua.match(/[a-z]+\s([\d._]+)(\s?)/) 
  }
  console.log(sv);
  console.log(ua);
  if(wv == null) wv = [null];
  if(sv == null) sv = [null];
//让外部可以访问[1].split(";")
  window.sys = {
    wName: w,
    wViesion: wv[1], 
    sName: s,
    sViesion: sv[1],
    sBit: sv[2]
  }; 
 
})();

console.log("浏览器名字："+sys.wName+" 版本："+sys.wViesion);
console.log("系统名字："+sys.sName+" 版本："+sys.sViesion+"位数："+sys.sBit);