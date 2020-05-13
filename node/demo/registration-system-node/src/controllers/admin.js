/*
 * @Description: admin 请求控制器
 * @version: 1.0.0
 * @Author: 花妆男(HuaZhuangNan)
 * @Github: https://github.com/HuaZhuangNan
 * @Date: 2019-08-21 23:25:13
 * @LastEditors: 花妆男(HuaZhuangNan)
 * @LastEditTime: 2019-12-17 11:18:38
 */

const regtest = require('../util/regtest');
const baseResult = require('../models/baseResult');

class admin {
    login(req,res,next){
        // 处理数据
        let { name,pass,code } = req.body;
        // 验证码 
        if(code!==req.session.randomcode){
            res.json(new baseResult(401,'验证码有误'));
            // group 可以为空
        }else if(!(regtest.isAdmin(name) && regtest.isAdminPass(pass))){
            res.json(new baseResult(401,'提交参数有误'));
        }else {
            req.session.randomcode =null; //清空
            next();
        } 
    }
}

module.exports = new admin();
