#!/usr/bin/python3
# -*- coding: utf-8 -*- 
# @Time : 2019/8/26 16:01
# @Author : Tan 
# @Email : 1531391246@qq.com
# @File : csdn_liuliang.py
# @Software: PyCharm
import requests
import time
from fake_useragent import UserAgent
from lxml.html import fromstring
from tools.IPPool import GetIP
get_ip = GetIP()
useragent = UserAgent()
for i in range(2):
    headers = {
        'User-Agent': useragent.random
    }
    proxy = {'http': get_ip.get_random_ip()}
    html = requests.get('https://blog.csdn.net/BestFM/article/details/99218372', headers=headers, proxies=proxy)
    print(html.status_code)
    time.sleep(30)

