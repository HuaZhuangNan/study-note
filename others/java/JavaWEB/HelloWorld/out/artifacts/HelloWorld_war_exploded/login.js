

(function(){
    var user = document.getElementById("user"),
        pwd = document.getElementById("pwd"),
        info = document.getElementById("info");
    // 给user和pwd开启键盘事件
    user.onfocus = pwd.onfocus = function (ev) {
        if(info.innerHTML){
            user.value = pwd.value = info.innerHTML = "";
        }
    }
    // 给提交按钮添加点击事件
    document.getElementById("sum").onclick = function(){
        if(!formTest([user,pwd],info)){  // 没有错误
            ajax({
                type: "POST",
                url: "login.jsp",
                run: true, // 异步开启
                data: formSerialize([user,pwd]),
                process : function(i){
                    // 提交中代码 i
                    console.log(i);
                },
                success: function(ret){
                    // 成功请求
                    console.log(typeof ret)
                    ret =trim(ret)
                    // if(ret === "succ"){
                    //     // 登录成功
                    //     info.innerText = "服务器出错，错误代码："+ i;
                    //     //window.location = "wecome.jsp";
                    // }else{
                        // 登陆失败
                    info.innerHTML = ret;
                    //}
                },
                error : function(i){
                    // 失败代码 i
                    info.innerText = "服务器出错，错误代码："+ i;
                }

            })
        }
    };

})();
