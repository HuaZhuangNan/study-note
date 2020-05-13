/*
 * @Description: 日志有关
 * @Author: HuaZhuangNan
 * @Date: 2019-08-23 14:43:27
 * @LastEditTime: 2019-08-23 14:56:09
 */
const path = require('path');
const fs = require('fs');

const tool = require('./tool');

// log日志
const logsDir = path.resolve(__dirname,'..','./logs/');

// 写日志
function wirteLog(type,str){
    let time  = tool.dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss');
    fs.appendFile(`${logsDir}/${type}-${tool.dateFormat(new Date(),'yyyy-MM-dd')}.log`,`${time} ${str.trim()}\n`,'utf8', (err)  => {
        if (err) console.log('写日志出错：'+time + 'err:' + err);
    });
}
// 读日志
function readLog(type,date){
    let filename = `${logsDir}/${type}${date}`;
    if(fs.Dirent.isFile(filename)){
        fs.readFile(filename,'utf8',(err,data)=>{
            if(err){
                this.wirteLog('err','读取日志文件出错！');
                return '';
            }else {
                return data;
            }
        })
    } 
}

module.exports = {
    wirteLog,
    readLog
}