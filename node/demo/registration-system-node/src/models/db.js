/*
 * @Description: mysql查询基础的封装
 * @version: 1.0.0
 * @Author: 花妆男(HuaZhuangNan)
 * @Github: https://github.com/HuaZhuangNan
 * @Date: 2019-08-19 09:50:13
 * @LastEditors: 花妆男(HuaZhuangNan)
 * @LastEditTime: 2019-12-17 11:19:37
 */

const mysql = require('mysql');
// 导入配置
const config = require('./config');
// 创建连接池
var pool = mysql.createPool(config);

module.exports ={
    /**
     * @description: sql查询
     * @param {string:sql} {string:values}
     * @return: promise
     */
    q(sql,values){
        // 异步操作promise
        return new Promise((resolve,reject)=>{
            // 建立连接
            pool.getConnection((err,connection)=>{ // 从连接池取出连接
                if(err){
                    err.message = `[SQL LINK ERR]: ${err.message}`;
                    reject(err);
                }else {
                    connection.query(sql,values,(err, result,fileds)=>{
                        // 回收连接
                        connection.release();
                        if(err) {
                            err.message = `[SQL QUERY ERR]: ${err.message}`;
                            reject(err);
                        }else resolve(result);
                    })
                }
            })
        })
    }
};