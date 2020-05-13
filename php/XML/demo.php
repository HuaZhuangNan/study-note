<?php
/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-22 00:44:24
 * @version Bug 1.0.0
 */
//生成一个xml文件
$_name='于小沫';//变量可以解析
$_xml = <<<_xml
<?xml version="1.0" encoding="utf-8"?>
<root>
	<version>1.0</version>
	<info>xml解析测试</info>

	<user>
		<name>微轩痕</name>
		<url>http://wxwmy.cn</url>
		<author sex="男">$_name</author>
	</user>

	<user>
		<name>微轩</name>
		<url>http://m.wxwmy.cn</url>
		<author sex="女">微轩</author>
	</user>
</root>
_xml;


//echo $_xml;//网页输出

//创建一个simplexml对象,传入字符串
$_sxe = new SimpleXMLElement($_xml);
//生成xml文件
$_sxe -> asXML('test.xml');

?>