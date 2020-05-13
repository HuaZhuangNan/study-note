
addEvent(window,"load",function(event){
    var fm = document.getElementById("myForm");
    //var fm = document.getElementsByTagName("form")[0];
    //HTML DOM属性
    //var fm = document.forms[0];
    //var fm = document.forms["yourForm"];//name属性
    //直接使用document.yourFrom//不建议使用
    console.log(fm);

    //禁止submit行为
    addEvent(fm,"submit",function(event){
        preDef(event);
    });
    //必须用form对象触发，要把submit事件绑定到form,触发只不过是点击了一下按钮而已

    //别的方式提交
    var but = document.getElementById("but");
    addEvent(but,"click",function(){
        fm.submit();//可以让非submit按钮表单提交
    });
    //回车键提交表单
    addEvent(document,"keydown",function(event){
        var e = event || window.event;
        if(e.keyCode == 13) fm.submit();
    });

});