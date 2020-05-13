/*
 * @Description: 用户相关路由
 * @version: 1.0.0
 * @Author: 花妆男(HuaZhuangNan)
 * @Github: https://github.com/HuaZhuangNan
 * @Date: 2019-08-19 16:14:13
 * @LastEditors: 花妆男(HuaZhuangNan)
 * @LastEditTime: 2019-12-17 19:05:48
 */


const router = require('express').Router();

const userModels = require('../models/user');
const userControllers = require('../controllers/user');

// 验证下 time 参数

// 查找团队名
router.post('/findgroupname',[userControllers.findGroup,userModels.findGroup]);

// 添加用户
router.post('/adduser',[userControllers.addUser,userModels.addUser]);

module.exports = router;
