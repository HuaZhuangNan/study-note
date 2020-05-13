
//谷歌要服务器才可以
//IE8以上可以生成30个Cookie

//字节最大4096字节,4KB

//设置Cookie
function setCookie(name,value,expires,path,domain,secure){
    var cookieinfo = escape(name)+"="+escape(value);
    if(expires){
        var strsec = getsec(expires);
        var exp = new Date();
        exp.setTime(exp.getTime() + strsec*1);
        cookieinfo += ";expires=" +exp.toGMTString();
    };
    if(path){
        cookieinfo += ";path="+ path;
    };
    if(domain){
        cookieinfo += ";domain"+ domain;
    };
    if(secure){
        cookieinfo += ";secure"
    };
    document.cookie = cookieinfo;
};
//返回时间秒数
//这是有设定过期时间的使用示例：
//s20是代表20秒
//h是指小时，如12小时则是：h12
//d是天数，30天则：d30
function getsec(str)
{
   var str1=str.substring(1,str.length)*1;
   var str2=str.substring(0,1);
   if (str2=="s"){
        return str1*1000;
   }
   else if (str2=="h"){
       return str1*60*60*1000;
   }
   else if (str2=="d"){
       return str1*24*60*60*1000;
   }
};
//得到Cookie
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
};
//删除Cookie
function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
};
//写入Cookie,过期时间7天
setCookie("user","微轩痕","d7");
//打印Cookie
console.log(document.cookie);
console.log(getCookie("user"));



