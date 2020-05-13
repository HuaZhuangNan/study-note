


//事件切换器(传统脚本模型)问题(如果增加就会覆盖)

window.onload = function(){
    var box = document.getElementById("box")
    //box.onclick = toBlue;
/*    box.onclick = function (){
        console.log("Hello");
        toBlue.call(this);
    }*/

    //使用事件添加函数
    addEvent(box, "onclick" ,toBlue);
    addEvent(box, "onclick" ,function(){
        console.log();//可以不覆盖了
     })

}
function toRed() {
    this.className = "red";
    // this.onclick = toBlue;
    removeEvent(this,"onclick");
    addEvent(box, "onclick" ,toBlue)
}
function toBlue() {
    this.className = "blue";
    // this.onclick = toRed;//这里的onclick把console.log("Hello");又覆盖了
    removeEvent(this,"onclick");
    addEvent(box, "onclick" ,toRed)
}
//如果全局(匿名函数)this就是window


//添加事件函数
//obj  相当于window
//type  onload
//fn 相当于 function(){}
function addEvent(obj, type, fn){
    //保存上一个事件
    var saved = null;
    //判断事件是否存在
    if(typeof obj[type] == "function"){
        saved = obj[type];//写入上一个事件到saved
    }
    //执行事件
    obj[type] = function(){
        if(saved) saved();//防止上个事件被覆盖
        fn.call(this);//把this传梯过去
    }

}


function addEvent(window, "onload", con);//
function addEvent(window, "onload", con);//
//相同方法我们应该去掉的
function con(){
    console.log("是啊金");
}



addEvent(window,"onload" ,function(){
    console.log("事件一");
});
addEvent(window,"onload" ,function(){
    console.log("事件二");
});
addEvent(window,"onload" ,function(){
    console.log("事件三");
});
//但是不停的切换时,浏览器卡死了,递归太多
//解决我们就要释放掉
//移除函数(一刀切有问题,容易误杀)
//obj  相当于window
//type  onload
//fn 相当于 function(){}
function removeEvent(obj, type){
    if(obj[type]) obj[type] = null;
}




//对象操作可以使用数组操作
//window.onload == window["onload"]




/*console.log(typeof window.onload);//没有建立就是object

window.onload = function(){

    //传统模型
    //内联，脚本模型

    //脚本模型
    var butt = document.getElementById("butt");
    butt.onclick = function() {
        console.log("点击了按钮");
    }
     console.log("事件一");

}
//防止覆盖
if(typeof window.onload == 'function'){
    //保存上一个事件对象
    var saved = null;
    saved = window.onload;
}

window.onload = function(){
    if(saved) saved();//执行上一个事件
    var butt = document.getElementById("butt");
    butt.onclick = function() {
        console.log("点击了按钮2");
    }
    console.log("事件二");
}

//如果多过页面有多个js不同程序员都会写
//第一个就会被覆盖
//解决办法
console.log(typeof window.onload);//建立了就是function*/