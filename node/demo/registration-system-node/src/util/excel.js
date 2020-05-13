/*
 * @Description: Excel 有关
 * @Author: HuaZhuangNan
 * @Date: 2019-08-23 13:49:12
 * @LastEditTime: 2019-11-14 19:41:48
 */

const xlsx =  require('node-xlsx').default;
const fs = require('fs');

// 读取excel文件
function readExcelFile(filename,sheetName='Sheet1'){
    if(sheetName=='all') return xlsx.parse(filename);
    else {
        let datas = xlsx.parse(filename);
        let data = [];
        datas.forEach(sheetData => {
            if(sheetData.name==sheetName){
                data = sheetData.data;
                return false;
            }  
        });
        return data;
    }
}
// 写入excel文件
function wirtExcelFile(filename,data,callback,sheetName='Sheet1'){
    let buffer = xlsx.build([{'name': sheetName, 'data': data}]);
    fs.writeFile(filename,buffer,(err)=>{
        callback(err);
    });
}
module.exports = {
    readExcelFile,
    wirtExcelFile
}