

/**
 * 路由 HTTP请求方式和路径不同做不同响应
 * GET  查询
 * POST  添加
 * PUT  更新
 * Delete 删除
 * 
 * restful api (一种URl的格式)
 */


const express =require('express');
const app = express.Router();


// 直接使用use可以处理所有的路由处理请求
app.use((req,res)=>{
  res.send('ok');
})


// // 基本路由处理
// app.get('/',(req,res)=>{
//    res.send('GET data')
//  })
// app.post('/',(req,res)=>{
//   res.send('POST data')
// })

// app.put('/',(req,res)=>{
//   res.send('PUT data')
// })

// app.delete('/',(req,res)=>{
//   res.send('Delete data')
// })

// 启动服务
app.listen(3000,()=>{
  console.log('http://localhost:3000')
})
