var commentBox = {
  data(){
    return {
      user: '',
      content: ''
    }
  },
  template: '#commentTmp',
  methods: {
    postComment(){ // 发表评论方法
      // 保存到本地储存 localStorage 中
      // 保存最新评论之前要从 localStorage 获取
      if(!this.user || !this.content){
        alert("输入有误!");
        return;
      }
      var commment = { id: Date.now(), user: this.user,content: this.content };
      // // 读取并且转换成对象
      var list = JSON.parse( localStorage.getItem('cmts') || '[]')
      list.unshift(commment); // 最新评论应该排在前面
      // // 把数据保存到储存中
      localStorage.setItem('cmts',JSON.stringify(list));
      this.user = this.content = '';
      // 触发父组件 并且传参
      this.$emit('func');
    }
  }
}
// 2. 创建对象
var vm1 = new Vue({
  el: '#app',
  data: {
    list: [
      { id: Date.now(), user: "李白",content: '天生我才必有用!' },
      { id: Date.now(), user: "江小白",content: '劝君更进一杯酒' },
      { id: Date.now(), user: "小马",content: '风吹草地现牛羊！' }
    ]
  },
  components: {
    "cmt-box": commentBox
  },
  methods: {
    loadComments(){
      // 读取并且转换成对象
      this.list.unshift(...JSON.parse( localStorage.getItem('cmts')|| '[]'));
    }
  },
  created() { // data methods 初始化好了
    this.loadComments();
  }
})