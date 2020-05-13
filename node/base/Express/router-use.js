
/**
 * 
 * use 和 路由方式绑定 本质是一样的 
 */

const express = require('express');
const app = express.Router();

// app.get((req,res,next)=>{
//   console.log("有人访问");
//   next("route"); // 路由传参直接下一个中间件
// },(req,res)=>{
//   console.log("第二部")
// })
// app.get('/abc',(req,res,next)=>{
//   console.log("访问了/abc");
//   next();
// })
// app.get('/abc',(req,res)=>{
//   console.log("记录了访问");yarn
//   res.send('abc结束');
// })
// --------------------

var cb0 = (req,res,next)=>{
    console.log("访问了/abc");
    next();
};
var cb1 = (req,res,next)=>{
    console.log("访问了/abc");
    res.send("结束")
};

app.get('/file',[cb0,cb1])
// 处理错误
.all('*'),(req,res)=>{
  res.send('404');
}

// 服务

app.listen(3000,()=>{
  console.log('服务启动成功', 'http://localhost:3000')
})
