/*
 * @Description: user 请求控制器
 * @version: 1.0.0
 * @Author: 花妆男(HuaZhuangNan)
 * @Github: https://github.com/HuaZhuangNan
 * @Date: 2019-08-21 11:43:46
 * @LastEditors: 花妆男(HuaZhuangNan)
 * @LastEditTime: 2019-12-17 11:19:00
 */


const regtest = require('../util/regtest');
const baseResult = require('../models/baseResult');

class user {
    addUser(req,res,next){
        // 处理数据
        let { name,sex,phone,unit,group,code } = req.body;
        // 验证码 
        if(code!==req.session.randomcode){
            res.json(new baseResult(401,'验证码有误'));
            // group 可以为空
        }else if(!(regtest.isChinese(name,5) && regtest.isChainSex(sex) 
            && regtest.isChainPhone(phone) && regtest.isChinese(unit,20) 
            && regtest.isgroupName(group,20))){
            res.json(new baseResult(401,'提交参数有误'));
        }else {
            req.session.randomcode =null; //清空
            next();
        }
    }
    findGroup(req,res,next){
        // 处理数据
        let { name,phone,code } = req.body;
        // 验证码
        if(code!==req.session.randomcode){
            res.json(new baseResult(401,'验证码有误'));
        }else if(!(regtest.isChinese(name,20)  && regtest.isChainPhone(phone))){
            res.json(new baseResult(401,'提交参数有误'));
        }else {
            req.session.randomcode =null; //清空
            next();
        }
    }
}

module.exports = new user();