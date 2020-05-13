
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%!
    String sName;
%>
<%

    if(session.getAttribute("verifyconde") != null){
        sName = (String) session.getAttribute("verifyconde");
    }
%>
<html>
<head>
  <meta charset="utf-8">
  <title>主页面</title>
</head>
<body>
上一个验证码：<%=sName%>（PS: 因为页面刷新但是验证码没得刷新)
<form action="login" method="post">
  <label>用户名：
    <input name="name" type="text">
  </label>
  <label>密码：
    <input name="pwd" type="password">
  </label>
  <label>验证码：
      <input name="code" type="text" autocomplete="off">
    <img id="code" src="" style="cursor: pointer;" width="90px" height="30px" alt="验证码加载中...">
  </label>
  <button type="submit">登录</button>
</form>
  <script type="text/javascript">
    window.onload = function(){
      var code = document.getElementById("code");
      var codeUrl = "./codeimg?width="+code.width+"&heigth="+code.height+"&length=4"+"&time=";   // 防止缓存;
      // 初始化
      code.src=getUrl(codeUrl);
      code.onclick = function(){
        this.src = getUrl(codeUrl); // 防止缓存
      }
    };
    function getUrl(beseUrl){
      return beseUrl+new Date().getTime();
    }

  </script>
</body>
</html>
