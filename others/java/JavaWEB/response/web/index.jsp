<%@ page pageEncoding="UTF-8" contentType="text/html;charset=UTF-8" language="java" %>
<%
    request.setCharacterEncoding("utf8");
    String temp = request.getParameter("type");
    if(temp !=null && !"".equals(temp)){
        for(int i=1;i<10;i++){
            for(int j=1;j<10;j++){
                out.print(i+"*"+j+"="+i*j+"  ");
            }
            out.print("<br/>");
        }
        switch (temp){
            case "txt": response.setContentType("text/plain;charset=utf-8"); break;
            case "xls": response.setContentType("application/vnd.ms-excel;charset=utf-8"); break;
            case "doc": response.setContentType("application/msword;charset=utf-8"); break;
            case "html":
            default: response.setContentType("text/html;charset=UTF-8");
        }
        // 页面五秒刷新一次 response.setHeader("refresh","5");
        // 延迟跳转
        response.setHeader("refresh","10;url=https://www.baidu.com");
    }
%>

<html>
<head>
    <meta charset="utf-8"/>
    <title>九九乘法表</title>
</head>
<body>
<form method="post" action="index.jsp">
    <label>请选择：
        <select name="type">
            <option value="html">HTML
            <option value="txt">文本
            <option value="xls">excel
            <option value="doc">wor
        </select>
    </label>
    <button type="submit">提交</button>
</form>s
</body>
</html>
