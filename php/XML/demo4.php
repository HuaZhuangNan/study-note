<?php
/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-22 01:49:29
 * @version $Id$
 */

//DOMdocument超控xml

//DOMdocument解析XMl

//创建一个对象
$_doc = new DOMDocument();
//载入xml
$_doc -> load('test.xml');
//取version
$_version = $_doc -> getElementsByTagName('version');
//取出来
echo $_version -> length.'<br/>';//数量
echo $_version -> item(0) -> nodeName.'=';//第一组的名字
echo $_version -> item(0) -> nodeValue.'<br/>';//第一组的值
//循环遍历
foreach($_version as $_k){
	echo $_k -> nodeValue.'<br/>';
}
//标签属性值
$_author= $_doc -> getElementsByTagName('author');
echo $_author -> item(0) -> getattribute('sex').'<br/>';//第一组的值sex属性值
?>