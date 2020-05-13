

window.onload = function(){

    //获取滚动条大小paddng(内边距会算进去)margin(外边距不会计算进去)
    //滚动条如果不存在内外边距都会显示,但是文本溢出就会一堆古怪问题 IE的最小
    var box = document.getElementById("box");
    console.log(box.scrollWidth);
    console.log(box.scrollHeight);//IE 8 以下会减少(理解为文字的高度)

    //获取元素的实际大小,包括内边距、外边框(不包括、滚动条)
    console.log(box.offsetWidth);
    console.log(box.offsetHeight);

    //获取周边元素大小(外边距),相对于父元素
    console.log(box.offsetTop);
    console.log(box.offsetLeft);

    //获取元素左边框和上边框的大小(border)
    console.log(box.clientLeft);
    console.log(box.clientTop);

    //得到父元素(加上边框he内边距不会影响，但是上外边距会增加),没有使用position：absolute,会出现一些问题
    console.log(box.offsetParent);//返回<boyd></body>
    console.log(box.offsetParent.tagName);//返回BODY
    console.log(box.offsetParent.id);

    //求出box距离页面的距离
    console.log(offsetTop(box));//20
    function offsetTop(element){
        var top = element.offsetTop;
        var parent = element.offsetParent;

        while(parent != null){
            top + parent.offsetTop;
            parent = parent.offsetParent;
        };
         return top;
    }
    box.scrollTop = 100;
    //获取滚动条被隐藏的区域大小，也可以定位区域
    console.log(box.scrollTop);
    console.log(box.scrollLeft);


    scrollStart(box);

    //滚动条回到最初位置
    function scrollStart(element){
        if(element.scrollTop != 0)
            element.scrollTop = 0;
    }


    //getBoundingClientRect(),获取元素位置
    console.log(box.getBoundingClientRect().top);
    console.log(box.getBoundingClientRect().right);
    console.log(box.getBoundingClientRect().bottom);
    console.log(box.getBoundingClientRect().left);


    console.log(document.documentElement.clientTop);// IE 8 以下会出现为2
    console.log(document.documentElement.clientLeft);
}