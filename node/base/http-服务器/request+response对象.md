
# request 对象 + response 对象

## request 对象

* request 对象 `http.IncomingMessage`, 继承自`stream.Readable`, http请求报文信息
* request 对象常用成员
   + request.headers _请求报文头_ 返回 *Object*
      - User-Agent
      - Host
      - Referer
      - Accept-Language
      - ...
   + request.rowHeaders _原生请求报文头_ 返回 *Array*
      - 同上
   + request.httpVersion _请求http版本_ 返回 *string*
      - 2.0
      - 1.1
      - 1.0
   + request.method _请求方法_ 返回 *string*
      - GET
      - POST
      - DELETE
      - '...'
   + request.url _请求路径_ 返回 *string*
## respone 对象 

* respone 对象 `http.ServerResponse`, 继承自stream.Readable, http请求报文信息
* respone 对象常用成员
   + respone.writeCode  _设置 http 响应状态码_ 
      - 200
      - 404
      - ...
      - 如：`respone.writeCode=200;`
   + respone.ststusMessage  _设置 http 响应状态码信息_ =
      - OK
      - Not Found
      - ...
      - 如：`respone.ststusMessage=OK;`
   + request.setHeader(name, value) _设置响应头信息_
      - 如：`request.setHeader_'Content-Type', 'application/json'_;`
   + response.writeHead(statusCode[, statusMessage][, headers]) _向请求发送响应头_
      - statusCode  类型 *number* 
      - statusMessage 类型  *string*
      - headers 类型 *Object*
      - 如：```response.writeHead_200,'OK',{
         'Content-Type' : 'text/plain; charset=utf-8'
      }_;```
   + response.write(chunk[, encoding][, callback]) _直接输出数据_ 返回: *boolean*
      - chunk 类型 *string* | *Buffer*
      - encoding 类型 *string* 默认为 'utf8'。
      - callback 类型 *Function*
      - 如：
   + response.end([data][, encoding][, callback]) _告诉服务器已经响应完_ 返回 *this*
      - data 类型 *string* | *Buffer*
      - encoding 类型 *string*
      - callback  类型 *Function*
   