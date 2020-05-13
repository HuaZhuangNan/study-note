#!/usr/bin/env python
# -*- coding:utf-8 -*-
import os
import json
import xlwt
# 插件模块
import requests

# 没写ip代理
def get_cookies(url=None):
    response = requests.get(url)
    cookie_value = ''
    for key, value in response.cookies.items():
        cookie_value += key + '=' + value + ';'
    # print(cookie_value)
    return cookie_value

# 获取文件
def get_jaon_file(fileName):
    if os.path.exists(fileName) != True:
        return []
    with open(fileName, "r", encoding="utf-8") as f:
        info = json.load(f)
    f.close()
    return info

# 保存文件
def save_json_file(fileName, data):
    with open(fileName, "w", encoding="utf-8") as f:
        json.dump(data, f,ensure_ascii=False)
    f.close()
    return os.path.exists(fileName)

# 保存excel文件  line_list 二元数组
def save_excel_file(fileName,sheetName,line_list):
    # 创建一个Workbook对象，相当于创建了一个Excel文件
    workbook = xlwt.Workbook(encoding="utf-8", style_compression=0)
    # 创建一个sheet对象，一个sheet对象对应Excel文件中的一张表格。
    sheet = workbook.add_sheet(sheetName, cell_overwrite_ok=True)
    style = xlwt.XFStyle()  # 创建一个样式对象，初始化样式
    al = xlwt.Alignment()
    al.horz = 0x02  # 设置水平居中
    al.vert = 0x01  # 设置垂直居中
    style.alignment = al
    # 一行一行写入
    for line in range(0,len(line_list)):
        for column in range(0, len(line_list[line])):
            value = line_list[line][column] # 获取值
            sheet.write(line, column,value,style) # 写入值
    if(os.path.exists(fileName)==False):
        workbook.save(fileName)
    else:
        print('有一个文件请先删除！')