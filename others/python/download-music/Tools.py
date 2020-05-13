# 获取 Cookies
#! user/bin/env python
# -*- coding:utf-8 -*-

# 模块
import re
import time

import requests
import os
import math
import json
# 插件
import lxml
from bs4 import BeautifulSoup
import urllib.request

# 获取 URLS
def getAudioIds(url,childUrl):
    print('获取: '+childUrl)
    res = requests.get(url+childUrl)
    soup = BeautifulSoup(res.text, 'lxml')
    ids = []
    for item in soup.find_all("a"):
        if (item.get('class') == ['songName']):  # 判断名字
            ids.append(int(item.get('href').split("/")[2].split(".")[0])) # /play/id.html
    return ids

# 获取 audio urls
def getAudios(ids=None,path=None):
    count=0
    data = []
    for id in ids:
        tpath = str(math.floor(id / 1000)+1)
        url = 'http://www.9ku.com/html/playjs/'+ tpath +'/'+ str(id) +'.js'
        res = requests.get(url)
        info = json.loads(re.sub('[\(\)]', '', res.text))
        if(info['mname']):
            name = info['mname'] +'-'+ info['singer']
            type = '.mp3'
            audio_url = info['wma']
            if(audio_url==None):
                type = '.m4a'
                audio_url = info['m4a']
            if(len(audio_url)>10):
                print('下载:'+ name + type)
                print(audio_url)
                urllib.request.urlretrieve(audio_url, path + re.sub('[\/\/\s]', '-', name) + type )
                # 暂停会
                time.sleep(1)
                count+=1
                data.append(info)
    # 以json格式写入文件
    # 通过扩展名指定文件存储的数据为json格式
    filname= path +'data.json'
    with open(filname, 'w') as file_object:
        json.dump(data, file_object,indent=4)
    return count
