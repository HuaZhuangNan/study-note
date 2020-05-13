


/**
 * 事件应用中间件 本质就是一个函数
 */
const express = require('express');
const app = express()
let total = 0;

app.use((req, res, next)=>{
  // 全局记录访问
  console.log("有人访问");
  next(); 
})

app.use('/user',(req, res, next)=>{
  // 记录访问时间
  console.log(Date.now());
  next(); // 请求放到下一个中间件
})

app.use('/user',(req, res, next)=>{
  // 记录访问日志
  console.log(req.ip);
  next(); // 请求放到下一个中件件
})

app.use('/user',(req,res)=>{
  // 记录访问量
  res.send("中间件使用！总访问量"+(++total));
})



// 错误优先（4个参数）
app.use((err,req,res,next)=>{
  console.log(err);
})

app.listen(3000,()=>{
  console.log('http://localhost:3000')
})