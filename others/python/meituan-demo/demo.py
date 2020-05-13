#!/usr/bin/env python
# -*- coding:utf-8 -*-
# 自带模块
import time
import urllib.parse
import json
import re
# 插件模块
import requests
from bs4 import BeautifulSoup

# 自写模块
from CityId import CityIdList
import Tools

# host
host = 'www.meituan.com'
# 关键字
keyWord = '电影院'
# 省份名字
provinceName = '江西'
# 城市名字(为空获取整个省)
cityName = '永丰'
# 每次获取个数
number = 32
# 获取的数据总数
count = 0
# cookies
cookies = Tools.get_cookies('https://'+host)
# 获取城市id
city_id_list = []
city_id_list = CityIdList(host).get_city_id(provinceName,cityName)

# 如果返回默认值就是北京
if (city_id_list[0]==1 and provinceName != '北京'):
    provinceName = '北京'
    cityName = '北京市'
# 获取数据保存文件
info_file_name = provinceName +'-'+ cityName +'-'+ keyWord + ".json"

# 设置头部
res_headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    'Cookie': cookies,
    'Host': 'www.meituan.com',
    'User-Agent': 'Mozilla/5.0 (Windows NT 7.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3770.100 Safari/537.36'
}

# 请求api获取数据
res_headers['Host'] = 'apimobile.meituan.com'
def get_json(url):
    res = requests.get(url, headers=res_headers)
    info = json.loads(res.text)
    if (info['code'] != '0'):
        return {}
    global count
    count = info['data']['totalCount']
    #print("本次请求总数：",count)
    return info['data']['searchResult']


# 获取所有数据
data_list = []
q = urllib.parse.quote(keyWord)
print("请稍等，获取数据中。。。。")
# 如果返回不是单个id是数
for city_id in city_id_list:
    print("开始获取id:",city_id,'的数据')
    # 开始获取数量
    startNumber = 0
    while startNumber <= count:
        # 拼接url
        api_url = 'https://apimobile.meituan.com/group/v4/poi/pcsearch/' +  str(city_id) + '?' + cookies + '&userid=-1&limit=' + str(number) + '&offset=' + str(startNumber) + '&cateId=-1&q=' + q
        #print(api_url)
        data_list += get_json(api_url)
        startNumber += number
        # print(startNumber)
    # 每个城市获取完暂停 3秒
    time.sleep(3)
# 格式化 info_list
print("开始获取商家信息并且格式化数据。。。。")
i = 0
info_list = []
res_headers['Host'] = 'www.meituan.com'
res_headers['Content-Type']= 'text/html; charset=utf-8'
res_headers['Referer'] = 'https://www.meituan.com'
while i < len(data_list):
    # 商家详情页
    # res_url = 'https://www.meituan.com/shop/'+str(data_list[i]['id']) +'/'
    # meishi
    res_url = 'https://www.meituan.com/meishi/' + str(data_list[i]['id']) + '/'
    page = requests.get(res_url, headers=res_headers)  # Get该网页从而获取该html内容
    soup = BeautifulSoup(page.content, "lxml")  # 用lxml解析器解析该网页的内容, 好像f.text也是返回的html
    #print(page.content.decode())
    pattern = re.compile(r"window\.(_appState|AppData) = (.*?)", re.MULTILINE | re.DOTALL)
    #尝试打印出网页内容,看是否获取成功
    content = soup.find_all("script",text=pattern)
    phone = ''
    if (content != 0):
        phone = content[0].string.split(' = ')[1]
    data = json.dumps(phone)
    print(data['poiInfo']['phone'])
    info_list.append({'title': data_list[i]['title'],'showType':data_list[i]['showType'] ,'avgscore':data_list[i]['avgscore'],'address': data_list[i]['address'],'latitude':data_list[i]['latitude'],'longitude':data_list[i]['longitude']})
    # 打印
    #print(info_list[i])
    i += 1
    # 暂停会
    time.sleep(3)
# 保存
Tools.save_json_file(info_file_name, info_list)
# 打印小吃个数
print("保存数据成功，总共有" + keyWord + "：",i,"家")
