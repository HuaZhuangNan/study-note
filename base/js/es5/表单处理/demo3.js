
addEvent(window,"load",function(event){
    //文本框脚本

    var fm = document.getElementById("myForm");
    //表单控件就是form下的表单元素标签
    //表单字段
    console.log(fm.elements);//表单控件集合
    var user = fm.elements["user"];
    var content = fm.elements["content"];
    console.log(user.value);
    console.log(content.value);

    //在HTML中textarea没有value属性
    //但是在js中可以获取到textarea的值

    //如果用DOM标准就会出问题
    //content.getAttribute("value");//只有IE支持，并且不可以获取实时修改值

    //获取默认值，一开始设定的值，不会改变
    console.log(user.defaultValue);//OK都支持
    console.log(content.defaultValue);//OK都支持

    //选择文本新版火狐开启开发人员工具时有点问题
    //user.select();//选定文本，
    //选择部分文本
    //user.setSelectionRange(0,2);//从第0个位置选中两个位置的文本(IE8以下不支持)
    //user.focus();//焦点移入

    //非IE时从第N个到第M个
    //IE8 及以下是重N个选择M个

    // //IE文本范围选择
    // var range = user.createTextRange(); //range对象，文本范围
    // range.collapse(true);  //将文本指针移到头
    // range.moveStart("character",0);//逐字移动，第0个开始
    // range.moveEnd("character",2);//同上
    // range.select();
    //W3C文本范围选择


    //getSelectText(user, 0, 3);//兼容选定 重第0个位置到第3个位置选择3个文本

    //选定文本后触发的事件(IE8不支持document,并且只要选定触发就触发事件)
    addEvent(user,"select",function(){

        console.log(getSelectText(user));//都支持了
        /*console.log(this.value);
        console.log("你好呀");
        console.log(this.selectionStart);
        console.log(this.selectionEnd);
        console.log(this.value.substring(this.selectionStart,this.selectionEnd));*/
    });


});

//文本选择兼容IE8及以下
    function getSelectText(text, start, num){
        if(text.setSelectionRange){
            text.setSelectionRange(start,num);
            text.focus();
        }else if(text.createTextRange){
            var range = text.createTextRange();
            range.collapse(true);
            range.moveStart("character",start);
            range.moveEnd("character",num-start);//用最后位置-开始位置 = 个数
            range.select();
        }
    };
//选定文本获取兼容IE8以下
function getSelectText(text){
    if(typeof text.selectionStart == "number"){
        return text.value.substring(text.selectionStart,text.selectionEnd);
    }else if(document.selection){
        return document.selection.createRange().text;//动态的获取

    }

}