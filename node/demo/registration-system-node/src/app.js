/*
 * @Description: 启动文件
 * @version: 1.0.0
 * @Author: 花妆男(HuaZhuangNan)
 * @Github: https://github.com/HuaZhuangNan
 * @Date: 2019-08-19 09:28:27
 * @LastEditors: 花妆男(HuaZhuangNan)
 * @LastEditTime: 2019-12-17 11:17:46
 */

// 加载node模块
const path = require('path');
// 加载框架
const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const bodyParser = require("body-parser");
const session = require('express-session');
// 加载配置
const config = require('./config');
// 加载工具包
const log = require('./util/log');

// 定义icon图标
app.use(favicon(__dirname + '/www/public/favicon.ico'));
// 定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 使用 session 中间件
app.use(session({
    secret :  `secret-${new Date().getTime()}`, // 对session id 相关的cookie 进行签名
    resave : true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
        maxAge: 24 * 60 * 60 * 1000, // 设置 session 的有效时间，单位毫秒 24小时
    },
}));
// 定义json数据格式
app.set('json spaces', 4);
// 设置生产环境因为默认开发环境
// app.set('env',process.env.NODE_ENV || 'production');
// 定义静态文件目录
app.use(express.static(path.join(__dirname, './www/public')));
app.use('/'+config.adminRootName+'/css',express.static(path.join(__dirname, './www/admin/css')));
app.use('/'+config.adminRootName+'/js',express.static(path.join(__dirname, './www/admin/js')));
// 挂载路由
app.use('/'+config.adminRootName,require('./routers/admin'));
app.use('/',require('./routers/user'));
app.use('/',require('./routers/main'));



// 开发环境，500错误处理和错误堆栈跟踪
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// 生产服务器错误捕捉
app.use(function (err, req, res, next) {
    // 响应
    res.status(err.status || 500).json({'code':err.status || 500,'msg':'服务器错误,请稍后访问!'});
    // 写日志
    log.wirteLog('err',err.message);
})

// 开启服务器
app.listen(config.port,config.host, () => {
    // 写日志
    log.wirteLog('info',`服务器启动成功：http://${config.host}:${config.port}`);
    console.log(`http://${config.host}:${config.port}`);
})
