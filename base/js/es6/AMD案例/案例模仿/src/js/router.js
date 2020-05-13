define(["Route",
  "sales/index","sales/add",
  "car/index",
  "dealer/index"
],function(Route,
  salesIndex,salesAdd,
  car,
  dealer
  ){
  "use strict"; // 严格模式
  const router = new Route({
    routes:[
      { path:"/",component:salesIndex },  // 首页
      { path:"/sales/add",component:salesAdd },
      { path:"/car",component:car },
      { path:"/dealer",component:dealer }
    ]
  });
  return router;
})