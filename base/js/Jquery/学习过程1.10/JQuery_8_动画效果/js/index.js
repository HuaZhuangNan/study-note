$(function(){  
  //动画效果

  $("button.btn").click(function(){
    $("#img")[0].src = "../img.png";
    $("#img").attr("src","../img.png");
  })
  
  
  //1,可以带参数有动画效果 
  //show();//显示 
  //hide();//隐藏
  //toggle(); //切换
  /*
    slow 600毫秒 normal 400毫秒 fast 200毫秒(如果 传错了或者空" 默认400)
    参数 1000 表示显示一秒 动画->长 宽 透明度
    第二个就是回调参数 可以实现列队动画
  */
//   $("#show").click(function(){
//     $("#box").show("slow",function(){
//       console.log("回调函数开始了");
//     })
//   })
//   $("#hidden").click(function(){
//   	$("#box").hide("slow");
//   })
//   
//   //回调函数递归自调用
//   $("#show").click(function(){
//   	$(".test").first().show("fast",function testShow(){
//       $(this).next().show("fast",testShow);
//     })
//   })
//   $("#hidden").click(function(){
//   	$(".test").last().hide("fast",function testShow(){
//   		$(this).prev().hide("fast",testShow);
//   	})
//   })
//   //组合切换 后面可以添加function
//   $("#toggle").click(function(){
//   	$("#box").toggle("slow");
//   })


  //2,滑动 slideDown向下 slideUP向上
//   $("#show").click(function(){
//     $("#box").slideDown("slow",function(){
//       console.log("回调函数开始了");
//     })
//   })
//   $("#hidden").click(function(){
//     $("#box").slideUp("slow");
//   })
//   //切换
//   $("#toggle").click(function(){
//     $("#box").slideToggle("slow");
//   })
  
  //3,淡入淡出
//   $("#show").click(function(){
//   	$("#box").fadeIn("slow",function(){
//   		console.log("回调函数开始了");
//   	})
//   }) 
//   $("#hidden").click(function(){
//   	$("#box").fadeOut("slow");
//   })
//   //切换
//   $("#toggle").click(function(){
//   	$("#box").fadeToggle("slow");
//   })
//   //指定透明度
//   $("#to").click(function(){
//   	$("#box").fadeTo("slow",0.3);
//   })
  

  //自定义动画
//   $("#custom").click(function(){
//     $("#box").animate({
//       width: "300px",
//       height: "400px",
//       opacity: "0.5",
//       fontSize: "50px"
//     });
//   })

//   $("#custom").click(function(){
//   	$("#box").animate({
//   		width: "300px",
//   		height: "400px",
//   		opacity: "0.5",
//   		fontSize: "50px"
//   	},1000,function(){
//       console.log("我是动画执行后执行!");
//     });
//   })
  //位移效果利用 top和left位移 top: 200px;移动到200px
  
  //每次都在动画后位置
//   $("#custom").click(function(){
//     $("#box").animate({
//       width: "+=300px",
//       height: "+=400px",
//       opacity: "+=0.5",
//       fontSize: "+=50px"
//     });
//   })

  //队列动画

  //回调函数 + 列队动画 可以实现不同元素队列动画
//   $("#custom").click(function(){
//     $("#box").animate({
//       width: "+=300px"
//     },function(){
//       $("#box").animate({
//       	height: "+=400px"
//       },function(){
//         $("#box").animate({
//         	fontSize: "+=50px"
//         })
//       })
//     });
//   })
  //在同一个元素基础上使用连缀也可以实现列队 不可以实现不同元素队列动画
//   $("#custom").click(function(){
//     $("#box").animate({width: "+=300px"})
//              .animate({height: "+=400px"})
//              .animate({fontSize: "+=50px"});
//   })
  
  //css方法会和连缀动画第一个一起执行
  //queue();///在动画之后执行
//   $("#custom").click(function(){
//       $("#box").slideUp("slow").slideDown("slow").queue(function(next){
//         $(this).css("background","orange");
//         next();//表示后面还要有动画
//       }).hide("slow");
//     })
  //逐个执行
//   $("#custom").click(function(){
//       $("#box").slideUp("slow")
//                .slideDown("slow",function(){
//                  console.log(count());
//                  console.log(count().length);
//                  $(this).clearQueue();//清除从这之后动画
//                })
//                .queue(function(){
//                   $(this).css("background","orange");
//                   $(this).dequeue();//表示后面还要有动画
//                })
//                .hide("slow");
//   })
//   function count(){ //当前执行动画参数 第一个状态 后面就是动画运行了的参数
//     return $("#box").queue("fx");
//   }
  
  //动画相关方法
  
  //同步动画
//   $("#custom").click(function(){
//     $("#box").animate({
//       width: "600px"
//     },2000);
//   })
//   //不带参数表示哪里触发哪里停止，停止再次触发都是再上一个基础上，但是属性是上一个基础
//   $("#stop").click(function(){
//     $("#box").stop();
//   })

  //列队动画 
//   $("#custom").click(function(){
//     $("#box").animate({width: "300px"},2000)
//              .animate({height: "400px"})
//              .animate({fontSize: "50px"});
//   })
  //列队动画的话只是把触发停止时的动画取消，其他继续 ，停止再次触发都是再上一个基础上，但是属性是上一个基础
  //第一个参数（true），默认（false）就是全部都停止，停止再次触发都是再上一个基础上，但是属性是上一个基础
  //第二个参数（true），默认（false）触发时候动画就会直接跳转到目标值 停止再次触发都是动画重新来，但是属性是上一个基础
//   $("#stop").click(function(){
//   	$("#box").stop(true,true);
//   })
  
  //动画全局属性
  $.fx.interval = 20;//运行兆帕设置为20,越小越流畅 默认值13秒，大了就会卡，太小可能会卡顿浏览器
  
  //$.fx.off = true;//关闭动画，过滤函数受影响--JQ 620行
  //动画过滤函数
//   $("#box").slideToggle("slow",function(){
//     $("#box").slideToggle("slow",arguments.callee);
//   });//递归自调用
//   console.log("现在有"+$(":animated").size()+"动画在运行");
//   $("#stop").click(function(){
//     console.log("现在关闭了全部动画,共有"+$(":animated").stop().size()+"个");
//   })
  
  //一些动画参数 执行时间 动画方式
  $("#custom").click(function(){
    $("#box").animate({
      width: "600px"
    },2000,"swing");//默认值 swing(缓动) linear(匀速) 
  })
})
