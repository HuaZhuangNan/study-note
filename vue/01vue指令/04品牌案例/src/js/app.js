Vue.config.devtools = true; // 1. 打开调试

// 2.创建一个时间过滤器,时间格式化，支持局部
Vue.filter('dateFormat',function(dateStr){
  // new出特定字符串
  var dt = new Date(dateStr);
  // padStart(2,'0'); 两位不够补零
  return `${dt.getFullYear()}-${dt.getMonth()+1}-${dt.getDate()} ${dt.getHours().toString().padStart(2,'0')}:${dt.getMinutes().toString().padStart(2,'0').toString().padStart(2,'0')}:${dt.getSeconds().toString().padStart(2,'0')}`;
})
// 2.1 自定义全局键盘修饰符，支持局部
Vue.config.keyCodes.f2 = 113;
Vue.config.keyCodes.f12 = 123;

// 2.2 自定义获取焦点指令，支持局部 
// 参数一 指令名字的前面不需要加 v- 前缀，调用则需要
// 参数二 一个对象
Vue.directive('focus',{
  // 每当指令绑定到元素上时立即执行，此时元素还未加载进DOM树 触发一次
  bind: function(el){},
  // 指令的定义,被绑定元素插入DOM时调用 触发一次
  inserted: function (el){
    // 聚焦元素
    el.focus();
  },
  // 当Vnode更新时触发，可能触发多次
  updated: function(el){}
})


// 3.创建实例
var vm = new Vue({
  el: '#app',
  data: {
    id: '',
    name: '',
    keywords: '',
    list: [
      { id: 1,name:'奔驰',ctime: new Date() },
      { id: 2,name:'宝马',ctime: new Date() },
      { id: 3,name:'劳斯莱斯',ctime: new Date() }
    ],
    alertMsg: { active: "alert-info",flag:false,data:{ title:"提示：",body:" " } }
    
  },
  methods: {
    add(){
      var err = null;
      if(this.id === '' || this.name === ''){
        err="表单必填项不可以为空！";
      }else if(/^[^0-9]+$/.test(this.id)){
        err="ID应该为数字！";
      }else if(this.name){
        var ret = this.list.find(item=>{
          return this.id == item.id;
        })
        if(ret) err="用户ID已经存在！";
      }
      if(err===null) {
        this.list.push({ id: this.id,name: this.name,ctime: new Date() });
        this.id=this.name='';
      }else{ 
        this.alertMsg={ active: "alert-danger",flag:true,data:{ title:"警告：",body: err+"请检查后重新输入！" } };
      }
    },
    del(id){
      this.list.some((item,i) => {
        if(item.id===id){
          this.list.splice(i,1);// 删除
          return true; // 找到终止循环
        }
      });
    },
    search(keywords){
      if(keywords==='') return this.list; // 关键字为空时
      return this.list.filter(item=>{ // 1.循环出数据数组对象返回一个新的数组
        //var value = Object.values(item); // 2.返回数据对象属性值数组
           // 3.0 数据数组转换成字符串替换掉 , 号 然后加以判断
          if( Object.values(item).toString().replace(/\,/g,'').indexOf(keywords) !== -1){ 
            return item;
          }
      })

    }

  },
  filters: {
    // 私有过滤器，如果和全局名字一样优先调用私有过滤器
    // fnName: function(value) {
    //   return value;
    // }
  },
  directives: { // 局部命令
    'color': {
      bind: function(el,binding){
        if(!binding) return;
        el.style.color = binding.value;
      }
    },
    'fontsize': function (el,binding){   // 等同于把这个函数写到 bind 和 update
        el.style.fontSize = binding.value += /^[0-9]+$/.test(binding.value) ? "rem" : ""; //默认 rem 单位
      }
  }

});


