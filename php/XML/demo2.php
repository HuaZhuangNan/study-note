<?php
/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-22 01:01:41
 * @version $Id$
 */

//载入html
$_sxe =simplexml_load_file('test.xml');
//输出
echo $_sxe -> asXML();
print_r($_sxe);
var_dump($_sxe);
//或者反射
Reflection::export(new ReflectionClass($_sxe));
?>