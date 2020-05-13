
//异步获取
window.onload = function(){
    //IE8及以上
    var xhr = new XMLHttpRequest();
    console.log(xhr);
    var dd = document.getElementById("dd");
    dd.onclick = function(){
        //POST
        xhr.onreadystatechange = function (){
            //console.log(xhr.readyState);
            if(xhr.status == 200){
                if(xhr.readyState == 4){
                   var data = xhr.responseText;
                    console.log(xhr.responseText);
                    console.log(eval("("+data+")"));
                    console.log(JSON.parse(data));
                    console.log(JSON.stringify(data));
                    console.log(xhr.getAllResponseHeaders());
                    console.log(xhr.getResponseHeader("Content-type"));
                }
            }else{
                console.log("获取失败");
            }
        };
        xhr.open("POST","demo.php?rand="+Math.random(),true);
        xhr.setRequestHeader("Content-type","application/x-www-from-urlencoded");
        xhr.send("name=小沫&age=100");


/*   GET
            xhr.onreadystatechange = function (){
            //console.log(xhr.readyState);
            if(xhr.status == 200){
                if(xhr.readyState == 4){
                   var data = xhr.responseText;
                    console.log(xhr.responseText);
                    console.log(eval("("+data+")"));
                    console.log(JSON.parse(data));
                    console.log(JSON.stringify(data));
                    console.log(xhr.getAllResponseHeaders());
                    console.log(xhr.getResponseHeader("Content-type"));
                }
            }else{
                console.log("获取失败");
            }
        };
        xhr.open('GET','demo.php?rand='+Math.random()+"&user="+encodeURI("小沫"),true);
        xhr.setRequestHeader('myheader','Lee'); //设置请求头信息,一般只有POST有用
        xhr.send(null);
        */
    }
}
//HTTP头信息
//服务器返回的信息,可以获取但是不可以设置
//请求信息,可以设置不可以获取

// 同步发送请求
// xhr.open('GET','demo.php?rand='+Math.random(),false);//false同步,准备发送请求get方法
// xhr.send(null);//发送请求,get不需要提交数据
// console.log(xhr.responseText);//获取返回数据
// //console.log(xhr.responseXML);//获取返回XML文件
// //IE第一次会向服务器请求，第二次就不会了最新了
// console.log(xhr.status);
// console.log(xhr.statusText);//状态码信息


