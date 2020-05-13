# nginx 的安装使用(Win平台)

## 下载：[http://nginx.org/en/download.html](http://nginx.org/en/download.html)

## cmd 运行 ./nginx.exe 打开 localhost/127.0.0.1 就可以查看是否启动成功

## 配置

1. 打开 conf/nginx.conf 文件
2. #gzip  on; 后面添加 `include  servers/*.conf; # 导入自定义配置文件`  引入servers下的所有.conf 文件，有利于我们的管理
3. conf目录新建 servers 文件夹
4. servers文件夹下建立 **.conf** 为后缀的文件进行配置
5. servers前面不加 ‘/‘ 表示从当前目录下的servers文件夹下, 加 ‘/‘ 表示已我们的本地磁盘根目录(如我E://servers), 如果错误可以看logs下的error.log

## 常用命令

```sh
start nginx     # 启动
nginx -t        # 检查配置文件的有效性
nginx -s stop   # 立即关闭，不保存相关信息
nginx -s quit   # 处理完当前的请求后关闭，并保存相关信息
nginx -s reload # 修改完配置文件后重新加载
nginx -s reopen # 打开日志文件
nginx -s reload # 重启(因为改变了配置,需要重启)

```

## 代理配置

```conf
// host 文件配置下
127.0.0.1  test.com
127.0.0.1  www.test.com
// 简单的代理配置
server {
  listen       80; # 监听端口
  server_name  test.com; # 浏览器的host name

  location / {
    proxy_pass http://127.0.0.1:8888; # 转发地址
    proxy_set_header Host $host; # 设置host
  }
}
```

## 代理缓存

```conf
// 简单的代理缓存配置
// 新建一个 cache 缓存文件夹
// levels=1:2 创建二级文件夹
// keys_zone=my_cache:10m  my_cache为名字 10m为大小
proxy_cache_path cache levels=1:2 keys_zone=my_cache:10m;
// 设置代理缓存
proxy_cache my_cache;
```

```js
// 客户端设置缓存5秒，代理设置20秒缓存，private表示只有浏览器缓存，no-store表示所有都不缓存
'CACHE-Control':'max-age=5, s-maxage=20'
// 表示请求头带了相同的才会命中同一个缓存
'Vary': 'X-Test-Cache'
// 请求是发送这个头
'X-Test-Cache':1
```

## HTTPS 设置

1. nginx目录下新建一个文件夹cert

```sh
// http重定向到https
server {
  listen      80 default_server;
  listen      [::]:80 default_server;
  server_name test.com
  return  302  https://$server_name$request_uri;
}
// 设置https
server {
  listen       443 ssl; # 监听端口
  server_name  test.com; # 浏览器的host name

  # ssl on;
  ssl_certificate_key certs/localhost-privkey.pem;
  ssl_certificate certs/localhost-cert.pem;

  location / {
    proxy_pass http://127.0.0.1:8888; # 转发地址
    proxy_set_header Host $host; # 设置host
  }
}
```
