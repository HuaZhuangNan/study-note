
/**
 * 托管静态文件
 */
const express = require("express");
const app = express();

// 静态资源对外开放
//let server = app.use(express.static('public'))
//可以指定一个虚拟路径(就是访问需要添加实际不需要)
// let server = app.use('/static',express.static('public'))
// // 可以多个目录
// app.use(express.static('file'))
// // 开启服务
// server.listen(3000,()=>{
//   console.log("http://localhost:3000")
// })

// 等于
app.use('/static',express.static('public'))
// 可以多个目录
app.use(express.static('file'))
// 开启服务
app.listen(3000,()=>{
  console.log("http://localhost:3000")
})