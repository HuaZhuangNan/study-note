
//名值对encodeURIComponent编码后按sign转换成字符串
function params(data,sign){
    var arr = [];
    for(var it in data){
        arr.push(encodeURIComponent(it) + "=" +encodeURIComponent(data[it]));//放入数组
    }
    return arr.join(sign);//按sign转换成字符串
}
//封装Ajax(会默认传递GET,time参数解决缓存问题)
function ajax(obj){
    var xhr = new XMLHttpRequest();
    var data = params(obj.data,"&")+"&time="+new Date().getTime();
    if(obj.type === "get" || obj.type === "GET"){
        obj.url += "?"+ data;//编码中文解决IE中文问题,和缓存问题
    }
    if(obj.run === true){
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                call();
            }
            else {
                obj.process(xhr.readyState);
            }
        }
    }
    xhr.open(obj.type,obj.url,obj.run);
    if(obj.type === "post" || obj.type === "POST"){
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(data);
    }else {
        xhr.send(null);
    }
    if(obj.run === false){
        call();
    }
    function call(){
        if(xhr.status == 200){
                obj.success(xhr.responseText);//回调传参
                return ;
            }
            else{
                obj.error(xhr.status);
            }
    }
};
//调用ajax
window.onload = function (){
    var sub = document.getElementById("sub");
    sub.onclick = function(){
        ajax({
            type : "POST",
            url : "demo2.php",
            data : {
                "name" : "小沫",
                "age" : "19"
            },
            process : function (i){  // 0 1 2 3 4
                console.log(i);
            },
            success : function(info){  // 200
                console.log(info);
                // console.log(eval("("+info+")"));//不太安全的返回对象
                var info = JSON.parse(info);//较为安全的对象
                console.log(info);
                console.log(info["code"]);
                console.log(info["data"]);
                //console.log(JSON.stringify(info));//转义
            },
            error : function(i){ // 404 500 ....
                console.log(i);
            },
            run : true  //异步
        });
    }
};