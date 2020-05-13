// sales销售员模块
define(["jquery",
"service/salesService","require","router"],function($,
  salesService,
  require,router
  ){
  "use strict"; // 严格模式
  const sales = {
      init(){
        router=require("router");
        console.log("sales销售员模块初始化,数据服务:",salesService);
        // 渲染一个页面
        // 1. 拼接DOM
        // 模板
        const mould = `
        <div>
          <div>操作：
            <button class="add">添加</button>
            <button>查询</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>姓名</th>
                <th>年龄</th>
              </tr>
            </thead>
            <tbody>
              ${ // 拼接数据
                salesService.getList().map(item=>{
                  return `<tr><td>${item.name}</td><td>${item.age}</td></tr>`;
                }).join("")
              }
            </tbody>
          </table>
        </div>
        `;
        var $sales = $(mould);
        // 进行添加操作
        $sales.on("click",".add",function(){
          router.push({path:"/sales/add"});
        })
        // 2. 添加到指定区域
        $("#main .content").html($sales);
      }
  }
  // 模块对象
  return sales;
})