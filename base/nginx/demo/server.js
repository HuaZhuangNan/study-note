const http = require('http')
const fs = require('fs')
const port = 8888
http.createServer((request,response)=>{
  console.log(request.headers.host)
  // 写头
  response.writeHead(200,{
    'Cache-Control':'max-age=10, s-maxage=20'
  })
  // 返回
  const html = fs.readFileSync('test.html','utf-8')
  response.end(html)
}).listen(port)

console.log('服务器地址：localhost:'+port)
