

// IE9以上DOM2级事件

//内联属性事件和Html文件混着写
/*
    onclick 鼠标点击事件,直接写在html文件里
    或者函数调用 box();如果放在一个匿名函数就运行不到的
*/

//脚本模型(常用)


//Html 文件加载完的事件
window.onload = function(){
    var button = document.getElementById("sub");
    //对象.事件处理函数 = 函数或者匿名函数
    //让事件处理函数的时候，通过赋值方式，不用加();如 box
    //而且可以安外面也可以放同级
    button.onclick = box;
}

function box(){
    console.log("点击了按钮");
}


//事件处理函
/*
    事件处理函数   发生方法

//鼠标事件
    onclick       单击对象时
    ondblclick    双击对象时
    mousedown     按下鼠标还未弹起的事件
    mouseup       释放鼠标按钮事件
    mouseover     当鼠标移动到某个元素时触发
    mouseout      当鼠标移出某个元素是触发
    mousemove     当鼠标指针在元素上移动时触发
//键盘事件(windows对象下一般)
    onkeydown     当用户按下任意键时触发，如果不放会一触发
    onkeypress    当用户按下字符键时触发，如果不放会一触发
    onkeyup       当用户按下释放键时触发
//HTML事件
    onload        Html文件加载完执行
    onunload      Html文件卸载时触发(刷新)
    onselect      当选中时放开后事件
    onchange      当修改后放开后事件
    onfocus       当元素获得焦点时触发事件
    onblur        当元素失去焦点时触发
//表单
    onsubmit      用户单击提交按钮在(from)元素上触发
    onrest        用户单击重置按钮在(from)元素上触发

    onresize      当窗口或者框架大小变化时触发
    onscroll      当用户滚动条触发时启动


    onabort       图像加载中断时










*/