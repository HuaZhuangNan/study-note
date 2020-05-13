

//添加事件兼容
function addEvent(obj,type,fn){
    if(obj.addEventListener){
        obj.addEventListener(type,fn,false);//maopao
    }else if(obj.attachEvent){
        obj.attachEvent("on"+type,function(){
            fn.call(obj);

        });
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
//兼容阻止HTMl默认行为 IE8及以下
function preDef(event){
    var e = event || window.event;
    if(e.preventDefault){ //W3C
        e.preventDefault();
    }else{
        e.returnValue = false;
    }
};
//跨浏览器获取字符编码
function getCharCode(event){
    var e = event || window.event;
    if(typeof e.charCode == "number"){
        return e.charCode;
    }else{
        return e.keyCode;
    }
};