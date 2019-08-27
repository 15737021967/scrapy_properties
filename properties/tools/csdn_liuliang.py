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

for i in range(10):
    session = requests.Session()
    ua = useragent.chrome
    session.headers['User-Agent'] = ua
    session.headers['Referer'] = 'https://blog.csdn.net/BestFM'
    ip = get_ip.get_random_ip()
    proxy = {'https': ip}
    print(ua, ip)
    try:
        html = session.get('https://blog.csdn.net/BestFM/article/details/100066420', proxies=proxy)
        session.headers['Referer'] = 'https://blog.csdn.net/BestFM/article/details/100066420'
        p = session.options('https://msg.csdn.net/v1/chrome/notification/view', proxies=proxy)
        print(p.status_code, html.status_code)
    except Exception as e:
        print(e)
        continue

    time.sleep(5)

