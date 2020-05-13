#! user/bin/env python
# -*- coding:utf-8 -*-
import browser_cookie3
from http import cookiejar
#声明一个CookieJar对象实例来保存cookie
chrome_cookies = cookiejar.CookieJar()
# 插件模块
import requests

host = 'bj.meituan.com'

# 没写ip代理
def get_cookies(url=None):
    response = requests.get(url)
    cookie_value = ''
    for key, value in response.cookies.items():
        cookie_value += key + '=' + value + ';'
    # print(cookie_value)
    return cookie_value
cookies = get_cookies('https://'+ host)
chrome_cookies = browser_cookie3.load('.meituan')
for item in chrome_cookies:
    print('name',item.name)
    print('value',item.value)

print('获取到的：',cookies)
