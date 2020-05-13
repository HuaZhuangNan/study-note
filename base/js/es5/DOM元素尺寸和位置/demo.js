

window.onload = function(){

/*
    //通过CSSStyleSheet
    var sheet = document.styleSheets[0];
    var rule = (sheet.cssRules || sheet.rule)[0];
    console.log(rule.style.width);//失败 空
    console.log(rule.style.height);//失败 空
*/

    //通过style获取元素的大小(可以设置)
    var box = document.getElementById("box");
    console.log(box.style.width);//空
    console.log(box.style.height);//空
    //box.style.width = "200px";//设置可以

    //通过计算得出大小(不可以设置)
    var style = window.getComputedStyle ? window.getComputedStyle(box,null) : null || box.currentStyle;
    console.log(style.width);
    console.log(style.height);

    //根据实际来获取,获取的没有单位值(但默认是px 返回的数据类型是number,是数值,不是string)
    //如果单位不是px会自动计算返回
    //外边框和外编辑不会获取到
    //内比边距会获取到
    //滚动条返回会变少
    //在没有设置内边距和滚动条的情况下,不设置大小,IE 8 以下会理解为0
    console.log(box.clientWidth);
    console.log(box.clientHeight);
}