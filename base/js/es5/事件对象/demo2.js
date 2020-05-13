

// 对象(事件绑定对象).事件处理函数(事件监听器，侦听器) = 函数(匿名函数或者函数名)
//this 代表同级对象；如果事件绑定函数里面的this表示的是函数绑定对象
//当事件触发时浏览器会通过函数返回一个事件(event)对象
//如果事件处理函数绑定的函数，浏览器会默认传递一个参数

window.onload = function() {
    document.onclick = box;
}
function box(evt){
    var evt = evt || window.event;//window.event 大部分IE9以上就不支持undefined
    console.log("点击了一下html文件页面");
    console.log(evt.length);//arguments 获取传参值 IE 9以上会返回,evt.length 全为0
    console.log(evt);// IE8 及以下是 0 必须要window.event;
    // event对象里面有一个button属性
    console.log(evt.button);
    // 可视区坐标
    console.log(evt.clientX);
    console.log(evt.clientY);
    //离屏幕坐标
    console.log(evt.screenX);
    console.log(evt.screenY);
    //如果有滚动条也可以加滚动条的距离(通过这个值可以运行返回顶部)
    console.log(document.documentElement.scrollTop || document.body.scrollTop );


    //修改键(可以组合包含)

    shiftKey  判断是不是按下了shift键
    ctrlKey   判断是不是按下了ctrl键
    altKey    判断是不是按下了alt键
    metaKey   判断是不是按下了Windows键或者苹果中的 Cmd键

}

/*
    鼠标按钮事件(mousedown / mouseup / onclock(不太好用))事件来说
    event对象里面有一个button属性

    非IE 0主键(一般鼠标左键)  1中间(鼠标滚轮那妞) 2次鼠标按钮(一般鼠标右键)

    IE   0 表示没有按下按钮   1表示主按键  2表示鼠标右键  3同时按下  4按下中间 5按下中间和主键 6按下中键和右键 7全部三个同时按下

 */

/*
    window.event IE支持，Chrome也支持
    event  IE9以上 火狐 Chrome 都支持
 */
//非IE 0 1 2
//IE8及以下 1 4 2
//IE9以上 0 1 2



