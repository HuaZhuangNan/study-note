# 如何在移动端 web 页面启动 APP

- 网页直接在移动浏览器中访问
- 网页嵌入在 APP 中（web view）
  - 实现方法 ： 由 APP 的开发者制定一个协议
    `http://www.baidu.com/getUserInfo`
  - 协议地址如: `sdk://xxx.com/getUserInfo`
  - 前端直接通过页面跳转就可以了
    - a 标签
    - location.href
- 微信中网页，启动 APP
  - 微信对于一般用户并不支持跳转 APP
  - 微信只针对一些大客户（携程、唯品会、京东）才会提供接口
  - 小客户只能去第三方购买这个凭证
