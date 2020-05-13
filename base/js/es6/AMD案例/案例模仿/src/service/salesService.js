// sales 服务模块
define([], function(require, factory) {
  'use strict'; // 严格模式
  // 演示数据
  var serviceList = [
    { name:"陌轩痕",age:21 },
    { name:"陌沫",age:20 },
    { name:"痕迹",age:19 }
  ]
  return {
    getList(){
      return serviceList;
    },
    add(name,age){
      serviceList.push({name,age});
    },
    updata(){

    },
    del(){
      
    }
  }
});