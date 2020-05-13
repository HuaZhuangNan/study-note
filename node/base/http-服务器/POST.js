

/**
 * POST操作 querystring
 */

const querystring = require('querystring');
const http = require('http');
/*
// 转换成对象
let param = 'username=list&password=123&a=1&a=3';
let obj = querystring.parse(param);
console.log(obj);

// 转换成字符串
let obj1 = {
  flag: '123',
  abc: 'hell'
}
let str1 = querystring.stringify(obj1);
console.log(str1)

*/

// 接受POST数据
http.createServer((req,res)=>{
  if(req.url.startsWith('/login') && req.method === 'POST'){
    let pdata = '';
    //基于事件
    req.on('data',(chunk)=>{
      pdata += chunk;
    })
    req.on('end',()=>{
      console.log(pdata);
      let obj =  querystring.parse(pdata);
      res.end(querystring.stringify(obj));
    })
  }

}).listen(3000,()=>{
  console.log('http://localhost:3000')
})