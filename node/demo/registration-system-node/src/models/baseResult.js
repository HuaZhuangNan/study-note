/*
 * @Description: 返回基础对象
 * @Author: HuaZhuangNan
 * @Date: 2019-08-22 18:46:35
 * @LastEditTime: 2019-11-14 19:41:02
 */

 // 返回对象
class resultData{
    constructor(code,msg,data){
        this.code = code;
        this.msg = msg;
        this.data = data;
        if(data==null) delete this.data;
    }
}

module.exports = resultData;