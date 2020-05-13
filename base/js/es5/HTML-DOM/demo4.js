
//document.implementation.hasFeature("styleSheets",2.0);//是否支持styleSheets 2.0 IE false 但是是支持的


window.onload = function(){
    //单个获取link style 里面的样式,
    var  linkCss = document.getElementsByTagName("link")[0];
    console.log(linkCss);//IE 8 以前是object
    console.log(linkCss.sheet);//返回对象 IE 8及以下不支持(要用 styleSheet)
    var styleCss = document.getElementsByTagName("style")[0];
    console.log(styleCss);
    console.log(styleCss.sheet);//返回对象 IE 8及以下不支持(要用 styleSheet)

    //同时获取link和style的样式
    var sheet = document.styleSheets[0];//styleSheets
    console.log(sheet);
    // sheet.disabled = false ;//打开样式   true禁用样式
    // console.log(sheet.href);//链接
    // console.log(sheet.cssRules[0]);//样式规则集合第一个(谷歌有些版本不支持 IE 8及以下不支持)
    // console.log(sheet.cssRules[0].cssText);//样式规则集合第一个规则内容
    // console.log(sheet.cssRules[0].selectorText);//样式规则集合第一个规则内容标识符

    // sheet.deleteRule(0);//删除第一条规则(谷歌有些版本不支持 IE 8及以下不支持)

    // sheet.insertRule('body {background:red}',0);//毫无反应
    // sheet.addRule("body","background:red",0);//毫无反应
    console.log(sheet.cssText);//就IE支持，其他undefined
    console.log(sheet.stectorText);//undefined
    // console.log(sheet.style.color);//报错


}