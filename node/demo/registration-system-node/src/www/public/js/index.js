"use strict";

$(function(){
    tools();  // 一些辅助布局的
    addUser(); // 添加用户
    inputCodeimg(); // 验证码
    groupCodeimg(); // 查询验证码并按钮打开查询面板

    // 所有input添加监听9
    $("input[type='text']").focus(function(e){
        $(this).parent().parent().removeClass('has-error');
    })
    // alert不删除隐藏起来
    $("div.alert .close").focus(function(e){
        $(this).parent().removeClass('show').addClass("hidden");
    })
    
})

function addUser(){
    // 显示结果
    var inputResult = $("#inputResult");

    // 组件
    var inputName = $("#inputName");
    var inputMan = $("#inputMan");
    var inputWoman = $("#inputWoman");
    var inputPhone = $("#inputPhone");
    var inputUnit = $("#inputUnit");
    var inputGroup =$("#inputGroup");
    var typeOne = $("#typeOne");
    var inputCode =$("#inputCode");
    var btnReset =$("#btnReset");
    var btnSub = $("#btnSub");
    //
    var sexVal = "man";
    // 按钮监听
    inputMan.click(function(){
        sexVal = "man";
    })
    inputWoman.click(function(){
        sexVal = "woman";
    })
    typeOne.click(function(){
        inputGroup.val('');
    })
    btnReset.click(function(e){  // 重置
        e.preventDefault();
        inputName.val('');
        inputPhone.val('');
        inputUnit.val('');
        inputGroup.val('');
        inputCode.val('');
        inputMan.trigger("click");
        codeImgSet("#codeimg");
        inputResult.addClass("hidden");
        $("div.has-error").removeClass("has-error");
    })
    btnSub.click(function (e) {  // 提交
        e.preventDefault();
        // 是否可以提交
        var isOK = true;
        // ladding中
        btnSub.button('loading');
        inputResult.addClass("hidden");
        // 获取值
        var name = inputName.val();
        var sex = sexVal;
        var phone = inputPhone.val();
        var unit =  inputUnit.val();
        var group = inputGroup.val();
        var code = inputCode.val();
        
        if(name.trim().length<1 || name.trim().length>5){
            inputName.parent().parent().addClass('has-error');
            isOK =false;
        }
        if(sex.trim() !="woman" && sex.trim() !="man"){
            inputMan.parent().parent().addClass('has-error');
            isOK =false;
        }
        if(parseInt(phone.trim()).toString().length!=11){
            inputPhone.parent().parent().addClass('has-error');
            isOK =false;
        }
        if(unit.trim().length<1 || code.trim().length>20){
            inputUnit.parent().parent().addClass('has-error');
            isOK =false;
        }
        if(inputGroup.hasClass('show')&& (group.length<1 || group.length>20)){
            inputGroup.parent().parent().addClass('has-error');
            isOK =false;
        }else {
            inputGroup.val('');
            group =''; //防止没有清除掉
        }
        if(code.trim().length<1 || code.trim().length>4){
            inputCode.parent().parent().addClass('has-error');
            isOK =false;
        }

        // 是否提交
        if(isOK){
            var data = {name,sex,phone,unit,group,code}
            $.ajax({
                type: "Post",
                url: "./adduser",
                data: data,
                dataType: "json",
                success: function (res) {
                    inputResult.removeClass("hidden").removeClass("alert-success").addClass("alert-warning").removeClass("alert-danger").addClass("show");
                    if(res.code==201){
                        inputResult.addClass("alert-success").find("b").html(res.msg+name+"你的id为："+res.data);
                        // 自动添加到主键
                        $("#inputGroup").val(res.data);
                        codeImgSet("#codeimg");
                    }else if(res.code==202){ // 警告
                        inputResult.addClass("alert-warning").find("b").html(res.msg);
                        codeImgSet("#codeimg");
                    }else { // 错误
                        this.error(res.msg)
                    }
                    btnSub.button('reset');
                },
                error: function(err){
                    inputResult.removeClass("hidden").removeClass("alert-success").addClass("alert-warning").removeClass("alert-danger").addClass("show");
                    codeImgSet("#codeimg");
                    inputResult.addClass("alert-danger").find("b").html(err);
                    btnSub.button('reset');
                }
                
            });
        }else {
            btnSub.button('reset');
        }


    })

}



// 查找团名
function searchgroupName(){
    // 显示结果
    var groupresult = $("#groupresult");

    // 提示框组件
    var reset = $("#groupReset");
    var search = $("#groupSearch");
    var groupName = $("#groupName");
    var groupPhone = $("#groupPhone");
    var groupCode = $("#groupCode");

    // 初始化
    groupresult.addClass("hidden");
    groupName.val('');
    groupPhone.val('');
    groupCode.val('');

    // 按钮监听
    reset.click(function(e){
        e.preventDefault();
        groupCode.val('');
    })
    search.click(function(e){
        e.preventDefault();
        // 是否可以提交
        var isOK = true;
        // ladding中
        search.button('loading');
        groupresult.addClass("hidden");
        // 获取值
        var name = groupName.val();
        var phone = groupPhone.val();
        var code = groupCode.val();

        // 基本的验证
        if(name.trim().length<1 || name.trim().length>5){
            groupName.parent().parent().addClass('has-error');
            isOK =false;
        }
        if(parseInt(phone.trim()).toString().length!=11){
            groupPhone.parent().parent().addClass('has-error');
            isOK =false;
        }
        if(code.trim().length<1 || code.trim().length>4){
            groupCode.parent().parent().addClass('has-error');
            isOK =false;
        }
        // 提交
        if(isOK){
            var data = {name,phone,code}
            $.ajax({
                type: "Post",
                url: "./findgroupname",
                data: data,
                dataType: "json",
                success: function (res) {
                    groupresult.removeClass("hidden").removeClass("alert-success").addClass("alert-warning").removeClass("alert-danger").addClass("show");
                    if(res.code==200){
                        groupresult.addClass("alert-success").find("b").html(name+"的团队名："+res.data);
                        // 自动添加到主键
                        $("#inputGroup").val(res.data);
                        codeImgSet("#groupcodeimg");
                    }else if(res.code==202){ // 警告
                        groupresult.addClass("alert-warning").find("b").html(res.msg);
                        codeImgSet("#groupcodeimg");
                    }else { // 错误
                        this.error(res.msg)
                    }
                    search.button('reset');
                },
                error: function(err){
                    groupresult.removeClass("hidden").removeClass("alert-success").addClass("alert-warning").removeClass("alert-danger").addClass("show");
                    codeImgSet("#groupcodeimg");
                    groupresult.addClass("alert-danger").find("b").html(err);
                    search.button('reset');
                }
                
            });
        }else {
            search.button('reset');
        }
    })
}

// 更新二维码
function codeImgSet(str){
    var url = "./randomcode?time=";
    $(str).attr("src",url + new Date().getTime());
}

// 查询团队名codeimg
function groupCodeimg(){
    // 换二维码
    $(".v-find-group").click(function (e) { 
        e.preventDefault();
        codeImgSet("#groupcodeimg");
        searchgroupName();// 查找团名
    });
    $("#groupcodeimg").click(function(e){
        e.preventDefault();
        codeImgSet("#groupcodeimg");
    });
}


// 报名codeimg
function inputCodeimg(){
    var codeimg = $("#codeimg");
    // 第一次刷星
    resetcodeimg();
    codeimg.click(resetcodeimg);
    // 查询取消刷新
    $("#groupReset").click(resetcodeimg);
    $(".modal-header>button.close").click(resetcodeimg);
    // 刷新
    function resetcodeimg(e){
        if(e) e.preventDefault();
        codeImgSet("#codeimg");
    }
}


// 一些辅助布局的
function tools(){
    // 点击单关闭输入框
    $("#typeOne").click(function () {
        $("#inputGroup").val('');
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
}