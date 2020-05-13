/*
 * @Description: admin相关路由
 * @Author: MoXiaoYu
 * @Date: 2019-08-20 10:24:33
 * @LastEditTime: 2019-08-25 17:54:25
 */


const path = require('path');

const router = require('express').Router();
const config = require('../config');

var adminDir = path.join(__dirname,'../www/admin/')

// 首页登陆
router.get('/',(req,res,next)=>{
    res.status(200).redirect(config.adminRootName+'/login');
})
router.get('/login',(req,res,next)=>{
    res.status(200).sendFile(adminDir+'login.html');
})
// 信息管理
router.get('/info',(req,res,next)=>{
    res.status(200).sendFile(adminDir+'info.html');
})

// 登录
router.post('/sing_up',(req,res,next)=>{
    res.status(200).end("55");
})

module.exports = router;