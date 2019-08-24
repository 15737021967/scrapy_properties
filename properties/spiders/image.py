#!/usr/bin/python3
# -*- coding: utf-8 -*- 
# @Time : 2019/8/10 18:36
# @Author : Tan 
# @Email : 1531391246@qq.com
# @File : image.py
# @Software: PyCharm
from scrapy.loader import ItemLoader
from scrapy.loader.processors import MapCompose
from urllib import parse
from properties.items import ImageItem
import scrapy
import socket
import datetime


class ImageSpider(scrapy.Spider):
    name = 'image'
    # allowed_domains = ['image.so.com']
    start_urls = [
        'http://sc.chinaz.com/tupian/beijingtupian.html',
    ]

    def parse(self, response):
        loader = ItemLoader(item=ImageItem(), response=response)
        loader.add_xpath('image_urls', '//img/@src2')
        yield loader.load_item()
