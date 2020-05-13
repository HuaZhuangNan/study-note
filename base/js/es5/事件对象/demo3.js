

// 对象(事件绑定对象).事件处理函数(事件监听器，侦听器) = 函数(匿名函数或者函数名)
//this 代表同级对象；如果事件绑定函数里面的this表示的是函数绑定对象
//当事件触发时浏览器会通过函数返回一个事件(event)对象
//如果事件处理函数绑定的函数，浏览器会默认传递一个参数

//keypress返回keyCode,火狐字符键返回0,其他还区分大小写但是只支持字符键

window.onload = function() {

    document.onclick = function(event){
        console.log("Document");
        //console.log(getTarget(event));//IE8及以下不支持(返回对象) 点击其他区域火狐是html或者body 谷歌是html或者body
    }
    //事件流(默认冒泡模式，由里到外)
    document.documentElement.onclick = function(){
         console.log("Html");
    }
    document.body.onclick = function(){
        console.log("Body");
    }
    document.getElementById("box").onclick = function(){
        console.log("DIV");
    }
    document.getElementsByTagName("input")[0].onclick = function(){
        console.log("Input");
    }
    //取消冒泡
    document.getElementsByTagName("input")[0].onclick = function(event){
        var e = event || window.event;
        console.log("Input");
        //e.stopPropagation();//停止触发下面的事件(IE8及以下不限支持)
        e.cancelBubble = true;//IE8及以下(火狐谷歌都支持)
    }
}

//停止冒泡兼容

function setStop(event){
    var e = event || window.event;
    (typeof e.stopPropagation == "function") ? e.stopPropagation() : e.cancelBubble;
}


//获取点击函数对象兼容IE8以下
function getTarget(event){
    var e = event || window.event;
    return e.target || e.srcElement;
}

    /*document.onkeydown = function(evt){
         console.log(getkeydown(evt));
    };
    document.onkeypress = function(evt){
         console.log(getkeypress(evt));
    };*/
//返回判断按键
function getkeydown(evt){
    var e = evt || window.event;
    return e.keyCode;
}
//返回判断字符键(区分大小写)
function getkeypress(evt){
    var e = evt || window.event;
    if(typeof e.charCode == "number"){
        return e.charCode;
    }else{
        return e.keyCode;
    }
}
    //     document.onkeypress = function(evt){
    //     var evt = evt || window.event;
    //     console.log(evt.keyCode);//按下任意键得到相应的键名值(不区分大小写)
    //     console.log(evt.charCode);//keypress下浏览器都支持大小写(IE8及以下不支持Opera浏览器老版本不支持)
    //     if(evt.keyCode=="123"){
    //         alert("你按下了F12键");
    //     }
    //     if(evt.keyCode=="20"){
    //         alert("你按下了大小写键");
    //     }
    // }