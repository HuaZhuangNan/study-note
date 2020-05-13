/*
 * @Description: 获取数据
 * @version: 1.0.0
 * @Author: 花妆男(HuaZhuangNan)
 * @Github: https://github.com/HuaZhuangNan
 * @Date: 2019-08-22 18:46:26
 * @LastEditors: 花妆男(HuaZhuangNan)
 * @LastEditTime: 2019-12-17 11:21:08
 */

const db = require('./db');
const tool = require('../util/tool');
const baseResult = require('./baseResult');

class user {
    async findGroup(req,res,next){
        // 处理数据
        let { name,phone } = req.body;
        // 处理数据
        await db.q('SELECT `group` FROM `users`  WHERE `name` = ? and phone = ?',[name,phone])
            .then((result)=>{
                if(result.length<1){
                    res.status(202).json(new baseResult(202,'用户不存在'));
                }else if(result[0].group=="-1"){
                    res.status(202).json(new baseResult(202,'用户为单人,暂时没有团队！'));
                }else {
                    res.status(202).json(new baseResult(200,'OK',result[0].group));
                }
                
        }).catch(next);
    };
    async addUser(req,res,next){
        // 处理数据
        let { name,sex,phone,unit,group } = req.body;
        // 先判断是否拥有
        await db.q('SELECT `id` FROM `users` WHERE `name` = ?  and phone = ? ',[name,phone])
        .then(async (result)=>{
            if(result.length != 0){ // 存在用户
                res.status(202).json(new baseResult(202,'用户已经存在!'));
            }else {
                if(group=='') group="-1";
                let time =tool.dateFormat(new Date(),"yyyy-MM-dd hh:mm:ss");
                // 插入数据
                await db.q('INSERT INTO `users` (`name`,`sex`,phone,unit,`group`,createTime) VALUES (?,?,?,?,?,?)',[name,sex,phone,unit,group,time])
                .then((result)=>{
                    res.status(201).json(new baseResult(201,'添加用户成功!',result.insertId));
                });
            }
        }).catch(next);
    };
    async getAllUser(req,res,next){
        // 处理数据
        await db.q('SELECT * FROM `users`')
            .then((result)=>{
                res.status(200).json(new baseResult(200,'OK',result));
        }).catch(next);
    };
    async getPartUser(req,res,next){
        let {start,end} = req.body;
        // 处理数据
        await db.q('SELECT * FROM `users` LIMIT ?,?',[start,end])
            .then((result)=>{
                res.status(200).json(new baseResult(200,'OK',result));
        }).catch(next);
    };
    async upUser(req,res,next){
        let {id} = req.body;
        let sql ='UPDATE USER SET ';
        for (const key in req.body) {
            if (key&& key!=id) {
                slq += `${key}:${req.body[key]},`
            }
        }
        // 去掉最后一个逗号
        await db.q('? WHERE `id`=`?`',[sql.substr(0, sql.length - 1),id])
            .then((result)=>{
                res.status(204).json(new baseResult(204,'OK',result));
        }).catch(next);
    }
    async deleteUser(req,res,next){
        let {id} = req.body;
        await db.q('DELETE FROM `users` where `id`=`?`',[id])
            .then((result)=>{
                res.status(204).json(new baseResult(204,'OK',result));
        }).catch(next);
    };
}

module.exports = new user();