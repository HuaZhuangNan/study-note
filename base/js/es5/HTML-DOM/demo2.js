

window.onload = function(){

    //检测是不是支持DOM CSS等级

    console.log(document.implementation.hasFeature('CSS',2.0));//IE 都是 false
    console.log(document.implementation.hasFeature('CSS2',2.0));// IE 11 true (但是支持常用的模块)


    //全部支持 style (支持IE 8 以上) 只可以获取设置行类的属性,不可以获取head让里面的和link的

    //先获取节点
    var box = document.getElementById("box");

    console.log(box);//box对象, IE 9 那就直接返回那个信息
    console.log(box.style.color);
    console.log(box.style.fontSize);
    console.log(box.style.background);
    console.log(box.style.float);//IE 8 支持
    console.log(box.style.styleFloat);//只有IE 支持
    console.log(box.style.cssFloat);//IE 8及以下不支持

    //赋值也是一样的
    box.style.display = "none";//都支持


    //DOM 2级别
    console.log(box.style.cssText);//IE 8及以下属性字母会全部大写
    console.log(box.style.length);//IE 8及以下不支持 谷歌会多一个

    /*
    移除CSS IE 8及以下不支持 ,火狐旧版本也不支持
        box.style.removeProperty("display");
        box.style.setProperty("color","green");
    */

    var style = window.getComputedStyle(box,null)// 节点:伪类或者(null)

    //这里获取到的是计算后的样式(可以获取内联head和链接link),( IE 8 及一下不支持)
    //复合属性，要获取则需要单一获取
    console.log(style.color);//如果 Display  = "null" 这里颜色会变成 rgb(255.0.0);

    /*
    IE 8及以下的方法
        var style = box.currentStyle;
        console.log(style.fontSize);
    */
};