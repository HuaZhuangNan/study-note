
/*
  GET 参数处理 URL模块

┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                              href                                              │
├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │          host          │           path            │ hash  │
│          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │    hostname     │ port │ pathname │     search     │       │
│          │  │                     │                 │      │          ├─┬──────────────┤       │
│          │  │                     │                 │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │    hostname     │ port │          │                │       │
│          │  │          │          ├─────────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │          host          │          │                │       │
├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
│   origin    │                     │         origin         │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
│                                              href                                              │
└────────────────────────────────────────────────────────────────────────────────────────────────┘

*/

// 旧版本处理
// const url = require('url');
// let str = "http://www.bsidu.com";
// let ret = url.parse(str); // 转换成对象 
// console.log(ret);
/**
 * 
 * Url {
  protocol: 'http:', 协议
  slashes: true,
  auth: null,
  host: 'www.bsidu.com',
  port: null,
  hostname: 'www.bsidu.com',
  hash: null,
  search: null,
  query: null,
  pathname: '/',
  path: '/',
  href: 'http://www.bsidu.com/' }
 */


 // 新版本 WHATWG 
 const { URL } = require('url');
 const myURL = new URL('https://baidu.com/?wd=5555&type=utf8#366');
 console.log(myURL);

 /**
  * URL {
  href: 'https://baidu.com/',
  origin: 'https://baidu.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'baidu.com', // 包括端口
  hostname: 'baidu.com',
  port: '',
  pathname: '/',
  search: '', // ? 后面的
  searchParams: URLSearchParams {}, // 转换的对象
  hash: '' } // # 后面的
  */