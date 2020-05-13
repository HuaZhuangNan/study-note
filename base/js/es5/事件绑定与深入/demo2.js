
/*

//W3C 事件处理函数(IE8及以下不支持)(可以设置捕获和冒泡)
//DOM2级事件
//覆盖问题(解决)
//相同函数重复屏蔽问题(解决)
//是否可以传递this(解决)
//遗留内存问题(解决)
// 事件类型 执行函数 true捕获 false冒泡
window.addEventListener("load", function(){
    console.log("事件一");
}, false);
window.addEventListener("load", function(){
    console.log("事件二");
}, false);
window.addEventListener("load", function(){
    console.log("事件三");
}, false);

window.addEventListener("load", con, false);
window.addEventListener("load", con , false);
function con(){
    console.log("检测重复");
}

window.addEventListener("load",function(){
    var box = document.getElementById("box");
    box.addEventListener("click",function(){
        console.log("可以频");
    },false);
    box.addEventListener("click",toBlue,false)
},false);


function toRed() {
    this.className = "red";
    this.removeEventListener("click",toRed,false);
    this.addEventListener("click",toBlue,false);
}
function toBlue() {
    this.className = "blue";
    this.removeEventListener("click",toBlue,false);
    this.addEventListener("click",toRed,false);
}
*/

/*
//IE8及以下浏览器事件处理函数

    // 1, 不支持捕获 只支持冒泡
    // 2, 添加事件不会屏蔽重复函数
    // 3, this指向的是window而不是DOM对象
    // 4, 传统事件上无法接受Event事件 但是attchEvent()却可以


//覆盖问题(解决了,先2在1)
window.attachEvent("onload",function(){

    console.log("覆盖检测,1");
});
window.attachEvent("onload",function(){

    console.log("覆盖检测,2");
});

//添加一个额外方法,不会覆盖(解决了,先3在2,1)
window.attachEvent("onload",function(){
    var box = document.getElementById("box");
    box.attachEvent("onclick",function(){
        console.log("你好1");
    });
    box.attachEvent("onclick",function(){
        console.log("你好2");
    });
    box.attachEvent("onclick",function(){
        console.log("你好3");
    });
});

//同函数屏蔽问题(未解决)
window.attachEvent("onload", con);
window.attachEvent("onload", con);
function con(){
    console.log("检测重复");
}
//this无法传递
window.attachEvent("onload",function(){
    var box = document.getElementById("box");
    box.attachEvent("onclick",toBlue);
});



//IE传统方法是无法获取event对象的，但是attachEvent可以
*/



//兼容IE8及以下和W3C兼容事件


//添加事件
function addEvent(obj,type,fn){
    if(obj.addEventListener){
        obj.addEventListener(type,fn,false);//maopao
    }else if(obj.attachEvent){
        obj.attachEvent("on"+type,fn);
    }
};
//移除事件兼容
function removeEvent(obj,type,fn){
    if(obj.removeEventListener){
        obj.removeEventListener(type,fn,false);
    }else if(obj.detachEvent){
        obj.detachEvent("on"+type,fn);
    }
};
//获取目标事件
function getTarget(event){
    if(event.target){ //W3C
        return event.target;
    }else if(window.event.srcElement) {
        return window.event.srcElement;
    }
};

//测试成功
addEvent(window,"load",function(){
    var box = document.getElementById("box");
    addEvent(box,"click",toBlue);
});

function toRed(event) {
    var that = getTarget(event);
    that.className = "red";
    removeEvent(that,"click",toRed);
    addEvent(that,"click",toBlue);
}
function toBlue(event) {
    var that = getTarget(event);
    that.className = "blue";
    removeEvent(that,"click",toBlue);
    addEvent(that,"click",toRed);
}