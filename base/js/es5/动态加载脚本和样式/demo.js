

window.onload = function(){

    //动态加载脚本文件
    var flag = true;
    // if(flag){
    //     loadScript("demo1.js")
    // }
    // //console.log(typeof BrowserDetect);undefined

    // //动态加载脚本
    // var script = document.createElement("script");
    // script.type= "text/javascript";
    // script.text = 'console.log("你好哦")';//IE8也以下支持
    // //script.appendChild(document.createTextNode('console.log("你好哦")'));// IE8及以下不支持
    // document.getElementsByTagName("head")[0].appendChild(script);

    // loadScript("demo1.js");

    // //动态样式
    // if(flag){
    //    var link = document.createElement("link");
    //    link.type= "text/css";
    //    link.src= "demo.css";
    //    document.getElementsByTagName("head")[0].appendChild(link);
    // }
    //动态执行style
    if(flag){
       var style = document.createElement("style");
       style.type= "text/css";
       //link.appendChild(document.createTextNode("#bos{background:red}"));
       document.getElementsByTagName("head")[0].appendChild(style);
       insertRule(document.styleSheets[0],"#box","width:20px;height:60px;background:red;",0);
    }


}
//动态加载脚本函数
function loadScript(url){
    var script = document.createElement("script");
    script.type= "text/javascript";
    script.src= url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
//动态加载css样式函数
function insertRule(sheet,selectorText,cssText,position){
    //如果非IE
    if(sheet.insertRule){
        sheet.insertRule(selectorText+"{"+cssText+"}",position);
    }else if(sheet.addRule){  //如果是IE
        sheet.addRule(selectorText,cssText,position);


    }


}