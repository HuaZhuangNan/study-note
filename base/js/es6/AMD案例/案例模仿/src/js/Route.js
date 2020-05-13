// Route 路由模块
define([],function(){
  "use strict"; // 严格模式
  // var router = new VueRoute(){
  //   routes: [
  //     { path:"/home",componont:Home },
  //     { path:"/user",componont:user }
  //   ]
  // }
  
  // 构造函数
  function Route(option){
    this.routes = option.routes;
    this.init();
  }
  Route.prototype = {
    constructor:Route,
    init(){
      // 1.监听路由变化
      var _that = this;
      window.addEventListener("hashchange",function(){
        // 1.1 获取最新的hash值 "#xxx" ，substring后得到 "xxx"
        var hash =  location.hash.substring(1);
        // 1.2 获取hash值与本地查找匹配
        var route = _that.routes.find(item=>{
          return item.path === hash;
        }); 
        // 如果找不到返回值就为空
        if(route){
          route.component.init(); // 模块调用
        }

      })
    },
    push(opt){ // this.route 找到那个模块
      var route = this.routes.find(item=>{
        return item.path === opt.path;
      });
      if(opt && opt.path  && route){
        if(opt.path=="/"){
          route.component.init(); // 模块调用
          location.hash="";
        }else{
          location.hash="#"+route.path;// 导航栏修改
        }
        
      }
    }

  }
  return Route;
})