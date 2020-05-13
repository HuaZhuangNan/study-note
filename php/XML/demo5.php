<?php
/**
 * 
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-22 02:17:52
 * @version $Id$
 */
//DOMDocument超控xml
//DOMDocument创建xml

//声明DOMDocument变量
$_doc = new DOMDocument('1.0','utf-8');
//排版格式
$_doc -> formatOutput = true;
//使用createElement
//生成root标签
$_root = $_doc  ->createElement('root');
//生成version标签
$_version = $_doc  ->createElement('version');
//给version赋值
$_versionTextNode = $_doc ->createTextNode('1.0');
//把值放进去
$_version ->appendChild($_versionTextNode);
//把version标签添加到root标签里面
$_root ->appendChild($_version);
//添加$_root标签xml文件
$_doc ->appendChild($_root);
//生成一个xml文件

$_doc -> save('doc.xml');
?>