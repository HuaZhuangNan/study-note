<%@ page language="java" pageEncoding="utf-8"%>

<%
request.setCharacterEncoding("utf-8");
String name = request.getParameter("user");
String pwd = request.getParameter("pwd");

if(name !=null && pwd!=null && !"".equals(name) && !"".equals(pwd)){
	if("哈哈".equals(name) && "123".equals(pwd)){   // == 地址相等   equals 数据相等
		//out.print(name+"欢迎你！"); // 无错误！
		if(session.getAttribute("name") == null){  // 放到储存中
			session.setAttribute("name",name);
			session.setAttribute("stime",session.getCreationTime()); // 返回创建的毫秒时间戳
			session.setMaxInactiveInterval(60*60); //设置成 1 小时超时
		}
		response.sendRedirect("wecome.jsp");
	}else {
		out.print("账号或者密码错误！");
		out.print("<a href='index.jsp'>返回首页</a>");
	}
}else if(session.getAttribute("name") != null){
	// 已经登录直接跳转
	out.print("您已经登录了，直接跳转？<a href='wecome.jsp'>是</a>  <a href='wecome.jsp?logout=true'>否(注销并返回)</a>");
}
else{
	response.sendRedirect("index.jsp");
}
%>