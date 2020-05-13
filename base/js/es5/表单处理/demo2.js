
addEvent(window,"load",function(event){
    var fm = document.getElementById("myForm");
    //表单控件就是form下的表单元素标签
    //表单字段
    console.log(fm.elements);//表单控件集合
    //console.log(fm.length)//表单长度,不推荐
    console.log(fm.elements.length);//表单长度,推荐
    console.log(fm.elements[0]);//表单下第一个元素
    console.log(fm.elements["user"]);//表单下特定元素
    user = fm.elements["user"];
    user.focus();//将焦点移入
    user.blur();//将焦点移出
    //事件使用
    //焦点移出事件(优先)
    addEvent(user,"blur",function(){
        console.log("焦点移出");
    });
    //文本改变并焦点移出事件
    addEvent(user,"change",function(){
        console.log("文本改变了并且移出了焦点")
    });
    //选择的集合
    var sexList = fm.elements["sex"];
    console.log(sexList[0]);//第一个sex选项
    //共有表单属性和值(可以直接的赋值修改)
    console.log(sexList[0].value);//值
    console.log(sexList[0].disabled);//是否禁用
    console.log(sexList[0].name);//name值
    console.log(sexList[0].form);//所属表单对象
    console.log(sexList[0].type);//所属类型(不推荐修改这个属性)
});

/*
//禁止submit行为
    addEvent(fm,"submit",function(event){
        preDef(event);
    });
    //必须用form对象触发，要把submit事件绑定到form,触发只不过是点击了一下按钮而已
    //普通按钮方式提交
    var but = document.getElementById("but");
    var flag = false;
    addEvent(but,"click",function(){
        console.log("点击了提交");
        //第一次提交后禁用按钮
        //but.disablzed = true;//仅限于按钮
        //利用返回值,这种可以阻止回车按钮提交
        if(flag == true){
            console.log("正在提交,请勿重复点击提交按钮");
            return ;
        }
        flag = true;
        //模拟延迟5秒提交
        setTimeout(function(){
            fm.submit();//可以让非submit按钮表单提交
            console.log("提交成功");
            //but.disabled = false;//提交成功后放开按钮，页面会自动全局刷新
        },5000)

    });
    //回车键提交表单
    addEvent(document,"keydown",function(event){
        var e = event || window.event;
        if(e.keyCode == 13) fm.submit();
    });
//reset事件 reset()方法
    addEvent(fm,"reset",function(){
        console.log("实现了按钮")
    });
    addEvent(document,"click",function(){
        fm.reset();
    });
*/