"use strict";

$(function(){
    // 点击单关闭
    $("#typeOne").click(function () { 
        $("#formGroup").removeClass("show").addClass("hidden");
    });
    // 点击团显示输入框
    $("#typeGroup").click(function () { 
        $("#formGroup").removeClass("hidden").addClass("show");
    });
    // 工具提示
    $('[data-toggle="tooltip"]').tooltip();
    $(document.body).resize(function () {          //当浏览器大小变化时
        $("v-footer").css("top",$(document.body).height())
    });
    // 换二维码
    var codeimg = $("#codeimg");
    codeimg.attr("src","http://192.168.123.205/randomcode?time="+ new Date().getTime());
    $("#codeimg").click(function (e) { 
        e.preventDefault();
        codeimg.attr("src","http://192.168.123.205/randomcode?time="+ new Date().getTime());
    });
})