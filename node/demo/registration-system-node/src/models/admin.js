/*
 * @Description: 管理员信息有关
 * @Author: HuaZhuangNan
 * @Date: 2019-08-25 09:16:40
 * @LastEditTime : 2020-02-08 00:47:12
 */
const db = require('./db');
const tool = require('../util/tool');
const baseResult = require('./baseResult');

class admin {
    async loginAdmin(req,res,next){
        // 处理数据
        let { name,pass } = req.body;
        // 处理数据
        await db.q('SELECT `name` FROM `users`  WHERE `name` = `?` and `password` = `?`',[name,pass])
            .then((result)=>{
                if(result.length<1){
                    res.status(202).json(new baseResult(202,'用户不存在'));
                }else if(result[0].admin=="-1"){
                    res.status(202).json(new baseResult(202,'用户为单人,暂时没有团队！'));
                }else {
                    console.log(result[0].group)
                    res.status(202).json(new baseResult(200,'OK',result[0].name));
                }
                
        }).catch(next);
    };
}