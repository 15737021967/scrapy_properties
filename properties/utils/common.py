#!/usr/bin/python3
# -*- coding: utf-8 -*- 
# @Time : 2019/8/13 13:53
# @Author : Tan 
# @Email : 1531391246@qq.com
# @File : common.py
# @Software: PyCharm
import hashlib


def get_md5(url):
    if isinstance(url, str):
        url = url.encode('utf-8')
    m = hashlib.md5()
    m.update(url)
    return m.hexdigest()


if __name__=="__main__":
    print(get_md5('http://www.baidu.com'))


