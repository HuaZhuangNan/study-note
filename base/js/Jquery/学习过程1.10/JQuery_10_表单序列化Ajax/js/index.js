$(function(){ 
  //serializeArray();转化为JSON数据
  
//   //初始化默认参数
//   $.ajaxSetup({
//   	type: "POST",
//   	url : "test.php",
//   	data : $("form").serialize(),//表单序列化得到字符对并且编码 解码decodeURLComponent()
//   	timeout: 3000,
//   	datatype: "html",
//   })
//   
//   //表单序列化
//   $("#login .login-sub").click(function(){
//     $.ajax({
//       success : function(response,stutas,xhr){
//         console.log("获取的内容为:"+response+"->状态为:"+stutas+"->对象:"+xhr);
//       },
//       error : function(xhr,error,errorText){ //错误时处理
//         console.log("获取的对象为:"+xhr+"->错误为为:"+error+"->状态说明:"+errorText);
//         conslog.log(xhr.status+"=>"+xhr.statusText);
//       },
//     })
//   })
  
  //编码user对象编码属性值对
 var obj = {num : 1,user : "哈哈",val : "pp"};
 console.log($.param(obj));
  
  
})
