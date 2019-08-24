#!/usr/bin/python3
# -*- coding: utf-8 -*- 
# @Time : 2019/8/13 10:51
# @Author : Tan 
# @Email : 1531391246@qq.com
# @File : main.py
# @Software: PyCharm
from scrapy.cmdline import execute
import os
import sys
from scrapy.pipelines.images import ImagesPipeline


sys.path.append(os.path.dirname(os.path.abspath(__file__)))
execute(['scrapy', 'crawl', 'lagou'])








