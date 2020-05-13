Vue.config.devtools=true // 1. 打开调试

// 配置ajax请求路径 
// Vue.http.options.root = 'http://www.liulongbin.top:3005/';

var vm = new Vue({
  el: '#app',
  data: {
    name: '',
    list: [],
    alertMsg: {
      flag: false,
      time: 3,
      active: 'alert-info',
      title: '提示：',
      body: '请稍等：'
    },
    timer: null
  },
  // 配置ajax请求路径 
  http: {
    root: 'http://www.liulongbin.top:3005',
    emulateJSON: true // 全局启用标准
  },
  methods:{
    // 定时器只执行一次
    onceTimer(callback,time){
      if(this.timer) this.timer=null; // 停掉上一个定时器
        this.timer = setTimeout(()=>{
          var flag = callback();
          time--; if(time===0 || flag===false) clearTimeout(timer);
        },1000 * time);
    },
    // 弹出窗 
    alertShow(info){
      // var { name } = obj; // 创建了一个变量name，值 = obj.name
      this.alertMsg = {
        flag: info.flag || true,
        time: info.time || 3,
        active: info.active,
        title: info.title,
        body: info.body
      }
      this.onceTimer(()=>{
        this.alertMsg.flag=false;
      },this.alertMsg.time);
    },
    getAllList(){
      // {"status":0,"message":[{"id":14277,"name":"传智播客","ctime":"2019-03-02T06:43:52.000Z"}
      // Vue.$http.get('/someUrl', [config]).then(successCallback, errorCallback(可选));
      // "/api/getprodlist" 不会启动 root path
      // 反之 "api/getprodlist" 会启动 root path
      this.$http.get("api/getprodlist").then(result=>{
        if(result.status===200 && result.body.status ===0){ // 成功
          this.list = result.body.message;
          this.alertShow({active: 'alert-success',title: '提示：',body:  `品牌信息获取成功，总共：${this.list.length} 条`});
        }else {
          this.alertShow({active: 'alert-danger',title: '提示：',body: '品牌信息获取失败'});
        } 
      })

    },
    add(){
      // application/x-www-form-urlencoded 标准模式
      this.$http.post("api/addproduct",{ name:this.name})
      .then(result=>{
        if(result.status===200 && result.body.status ===0){ // 成功
          this.alertShow({active: 'alert-success',title: '提示：',body:  `${this.name}品牌信息添加成功，现在总共：${this.list.length} 条`});
          // this.List中添加 不请求服务器更新数据
          this.list.push({id:this.list[this.list.length-1].id+1,name:this.name,ctime: new Date().toLocaleString('zh-Hans-CN',{timeZone:"Asia/Shanghai"})});
          // 3 秒后清空name数据
          this.onceTimer(()=>{
            // 清空
            this.name='';
          },3)  
        }else {
          this.alertShow({active: 'alert-danger',title: '提示：',body: '品牌信息添加失败'});
        }
      })
    },
    del(id,name,index){
      //console.log(event.target.title)
      //http://www.liulongbin.top:3005/api/delproduct/:id
      this.$http.get("api/delproduct/"+id)
      .then(result=>{
        if(result.status===200 && result.body.status === 0){ // 成功${this.list[id].name}
          // this.list中删除 不请求服务器更新数据
          this.list.splice(index,1);
          this.alertShow({active: 'alert-success',title: '提示：',body:  `${name}品牌信息删除成功，现在总共：${this.list.length} 条`});
        }else {
          this.alertShow({active: 'alert-danger',title: '提示：',body: name +'品牌信息删除失败'});
        }
      })
    }
    
  },
  created(){  // 当 vm 实例 data , methods 初始化完毕时的生命周期
    // 获取数据放入this.list
    this.getAllList();
  },
  beforeDestroy() {
    // 在Vue实例销毁前，清除我们的定时器
    if (this.timer) {
      clearInterval(this.timer); 
    }
  }

})