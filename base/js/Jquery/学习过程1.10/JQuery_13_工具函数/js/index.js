$(function(){ 
  
  //字符串去两边空格
  //$.trim();
  
  //数组操作$.each 查找遍历
//   var arr = ["哈哈","小陌"];
//   $.each(arr,function(index,value){
//     console.log(index+"--"+value);
//   });
  //$.grep()筛选
//   var arr = [5,66,55,65,55,66];
//   var arrGrep = $.grep(arr,function(elem,index){
//     return index< 3 && elem < 6;//下标3之内 值在6以下 返回数据数组
//   });
//   console.log(arrGrep);//5
  //$.map()修改
  //var arr = [5,66,55,65,55,66];
    //var arrMap = $.map(arr,function(elem,index){
//      return index< 3 && elem < 6;//返回布尔值数组
    //if(index< 3 && elem < 6){
    // return elem+1
    //  }//筛选出来的数字加1
    //});
    //console.log(arrMap);
  //$.inArray()查找下标
      //console.log($.inArray(55,arr));//存在多个时只返回前面的
  //$.merge()合并数组
      //console.log($.merge([12,6,8,9,52],arr));//那个数组在前面那个就是在其前面
  //$.unique()删除重复的DOM元素 数字删除有BUG
  
  //$.("li").toArry();//合并多个DOM元素组成数组
  
  //对象遍历  $.each
//   $.each($.ajax(),function(name,fn){
//   	console.log(name+"=>"+fn);
//   });
  
  
  //测试操作
  //obj
//   $.isArray(obj);//判断是不是数组
//   $.isFunction();//判断是不是函数
//   $.isEmptyObject();//判断是不是空对象
//   $.isPlainObject();//判断是不是纯粹对象->必须用{}或者new Object()创造出对象没有参数
//   $.contains(,);//判断DOM节点是否含有别的DOM节点,必须原生的
//   //data
//   $.type(data);//判断数据类型 object array number string 。。。
//   $.isNumber();//判断是否为数值
//   $.isWindow();//判断是否为window对象
    
  //url操作
//     var obj = {
//       user : 55,
//       name : "66"
//     }
//     console.log($.param(obj));
  
  //绑定上下文的工具函数$,proxy();
  var obj = {
  	name : 55,
  	run : function(){
      console.log(this.name);
    }
  }
  $("#but").click($.proxy(obj,"run"));//解决this指向问题
  //
     
    
})
