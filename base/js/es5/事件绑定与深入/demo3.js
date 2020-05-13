
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
//鼠标滚轮事件

addEvent(document,"mousewheel",function(event){
    console.log(WD(event));
});
addEvent(document,"DOMMouseScroll",function(event){
    console.log(WD(event));
});

//兼容下
function WD(event){
     var e = event || window.event;
     if(e.wheelDelta){
        return e.wheelDelta;
     }else if(e.detail){
        return -e.detail*30;
     }
}

//离开页面前事件
//谷歌浏览器支持onbeforeunload事件。只不过在onbeforeunload事件中禁止alert()、confirm()等弹出对话框
// addEvent(window,"beforeunload",function(event){
//     preDef(event);
// });



//修改HTML右键菜单
addEvent(window,"load",function(){
    var text = document.getElementById("text");
    addEvent(text,"contextmenu",function(event){
        preDef(event);
        var menu = document.getElementById('menu');
        var e = event || window.event;
        menu.style.left = e.clientX+"px";
        menu.style.top = e.clientY+"px";
        menu.style.display = "block";

        addEvent(document,"click",function(){
            menu.style.display = "none";
        });//点击外面的时候取消掉
    });
})

//兼容阻止HTMl默认行为 IE8及以下
function preDef(event){
    var e = event || event.window;
    if(e.preventDefault){ //W3C
        e.preventDefault();
    }else{
        e.returnValue = false;
    }
}
/*
//阻止HTMl默认行为
addEvent(window,"load",function(){
    var link = document.getElementsByTagName("a")[0];
    addEvent(link,"click",function(event){
        preDef(event);//阻止默认行为
        console.log("你点击了链接");//可以执行
    });
});


//兼容 IE8及以下
function preDef(event){
    var e = event || event.window;
    if(e.preventDefault){ //W3C
        e.preventDefault();
    }else{
        e.returnValue = false;
    }
}
// link.onclick = function(){
//         return false;//必须放在最后才可以组织
// };
*/


/*
//得到移入移出对象
addEvent(window,"load",function(){
    var box = document.getElementById("box");
    //W3C标准
    addEvent(box,"mouseover",function(event){
        console.log(event.relatedTarget);//得到移入box最近的对象
    });
    addEvent(box,"mouseout",function(event){
        console.log(event.relatedTarget);//得到box移出最近的对象
    });
    //IE8及以下
    addEvent(box,"mouseover",function(event){
        console.log(window.event.fromElement.tagName);//得到移入box最近的对象
    });
    addEvent(box,"mouseout",function(event){
        console.log(window.event.toElement.tagName);//得到box移出最近的对象
    });

    //兼容
    addEvent(box,"mouseover",function(){
        getTarget(event);
    });
});

//兼容
function getTarget(event){
    var e = evt|| window.event;
    if(e.srcElement){  //IE8及以下
       if(e.type == "mouseover"){
            e.fromElement;
       }else(e.type == "mouseout"){
            e.toElement;
       }
    }else if(e.relatedTarget){ // W3C
        return e.e.relatedTarget;
    }
}
*/
