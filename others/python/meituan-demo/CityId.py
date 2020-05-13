#!/usr/bin/python
# -*- coding: UTF-8 -*-
import json
# 插件模块
import requests
# 自写模块
import Tools

class CityIdList:
    '所有城市列表'

    # protected
    _cityId_list = [] # 城市数据
    _cityId_list_fileName = './city_id_list.json' # 城市数据保存文件

    _res_headers = {  # 设置头部
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Cookie': '',
        'Host': 'www.meituan.com',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36'
    }

    def __init__(self,host,fileName=None) -> None:
        super().__init__()
        # 设置host
        if host:
            self._res_headers['Host'] = host
            Tools.get_cookies('https://' + host)
        # 设置路劲
        if fileName!=None:
            self._cityId_list_fileName = fileName
        # 判断是否有缓存
        self._cityId_list = Tools.get_jaon_file(self._cityId_list_fileName) # 获取
        if self._cityId_list == []: # 判断为空
            list = self.get_all_id()  # 获取
            if list != [] : # 判断不为空
                self._cityId_list =list
                Tools.save_json_file(self._cityId_list_fileName,list) # 保存

    # 获取所有城市id
    def get_all_id(self):
        # 获取所有省份
        res = requests.get("https://www.meituan.com/ptapi/getprovincecityinfo/", headers=self._res_headers)
        result = json.loads(res.text)
        if (len(result) == 0):
            return []
        # 格式化数据
        cityId_list = []
        for temp_list in result:
            temp_list2 = {}
            for temp_list3 in temp_list['cityInfoList']:
                temp_list2[temp_list3['name']] = temp_list3['id']
            cityId_list.append({temp_list['provinceName']: temp_list2})
        return cityId_list

    # 获取城市id 默认返回1
    def get_city_id(self, provinceName,cityName=None):
        result_list = []
        if self._cityId_list!=[]:
            province_dict = {}
            for temp_dic in self._cityId_list:
                province_dict = temp_dic.get(provinceName,{})
                if province_dict!={}:
                    break
            if cityName!=None and cityName!='': # 有二级参数
                result_list.append(province_dict.get(cityName, 1))
            else:
                # 转换下数据类型 默认是 dict_vlaues 类型 转换成 list类型
                result_list =(list(province_dict.values()))
            return result_list