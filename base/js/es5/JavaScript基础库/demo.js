

window.onload = function (){
    //设置
    $().getId("sub").css("color","red").click(function(){
        console.log("点击了");
    });
    $().getId("sub").html("修改了值");
    $().getId("sex").value("男");

    $().getClass("pp").getElement(1).css("color","red");
    $().getClass("pp","p2").css("color","red");
    //行内css className
    $().getId("p1").addClass("b").addClass("a");
    $().getId("p1").removeClass('a');
    //link style 添加css
    $().addRule(1,"body","background-color:red;",0);//谷歌第一个参数是1不是0
    $().removeRule(1,0);//第一个参数是1不是0
    //获取
    console.log( $().getName("sex",0).value());
    console.log( $().getId("sub").html());
    console.log( $().getId("sub").css("background-color"));//IE9及以上是rgb
    console.log( $().getId("sex").value());


}

