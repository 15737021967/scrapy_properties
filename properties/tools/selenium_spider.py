#!/usr/bin/python3
# -*- coding: utf-8 -*- 
# @Time : 2019/8/25 13:08
# @Author : Tan 
# @Email : 1531391246@qq.com
# @File : selenium_spider.py
# @Software: PyCharm
from selenium import webdriver
from lxml.html import fromstring

option = webdriver.ChromeOptions()
option.add_experimental_option('excludeSwitches', ['enable-automation'])
browser = webdriver.Chrome(executable_path='chromedriver.exe', options=option)
browser.get('https://www.zhihu.com/signin?next=%2F')
browser.find_element_by_xpath('//div[@class="SignFlow-tab"]').click()
browser.find_element_by_xpath('//input[@name="username"]').send_keys('15737029167')
browser.find_element_by_xpath('//input[@name="password"]').send_keys('0921shtjl1208')
browser.find_element_by_xpath('//button[@type="submit"]').click()
# 执行js语句
browser.execute_script('window.scrollTo(0, document.body.scrollHeight); return document.body.scrollHeight')
# 设置chromedriver不加载图片
prefs = {'profile.managed_default_content_settings.images': 2}
option.add_experimental_option('prefs', prefs)
# browser.quit()

# phantomjs 无界面的浏览器， 对进程情况下性能会下降
