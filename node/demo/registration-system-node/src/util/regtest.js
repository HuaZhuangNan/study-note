/*
 * @Description: 一些正则验证
 * @Author: HuaZhuangNan
 * @Date: 2019-08-20 09:36:05
 * @LastEditTime: 2019-08-25 09:17:17
 */

module.exports = {
    isChainSex(str){
        return str === "man" || str === "woman"
    },
    isChainPhone(str){ // 11 位数字  开头不是123
        return /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(str);
    },
    isNumber(str,length){
        let reg = new RegExp(`^[0-9]{1,${length}}$`);
        return str.test(str);
    },
    isChinese(str,length){  // 中文2-length
        let reg = new RegExp(`^[\u4e00-\u9fa5]{2,${length}}$`);
        return  reg.test(str);
    },
    isgroupName(str,length){  // 组名 中文/英文/数字/0-length
        let reg = new RegExp(`^[\u4E00-\u9FA5A-Za-z0-9]{0,${length}}$`);
        return reg.test(str) && str!="-1";
    },
    isAdmin(str,length){
        let reg = new RegExp(`^[A-Za-z]{1,${length}}$`);
        return reg.test(str) && str!="-1"; 
    },
    isAdminPass(str,length){
        let reg = new RegExp(`^[A-Za-z0-9\?\_\!]{1,${length}}$`);
        return reg.test(str) && str!="-1"; 
    },
    isUserKey(str){
        switch(str){
            case 'id':
            case 'name':
            case 'phone':
            case 'unit':
            case 'group':
            case 'createTime':
                return true;
            default:
                return false;
        }
    }
}
