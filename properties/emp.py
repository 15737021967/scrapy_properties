#!/usr/bin/python3
# -*- coding: utf-8 -*- 
# @Time : 2019/8/8 14:15
# @Author : Tan 
# @Email : 1531391246@qq.com
# @File : emp.py
# @Software: PyCharm
import pymongo


if __name__ == "__main__":

    conn = pymongo.MongoClient(
        "mongodb+srv://x-tjl:0921shtjl1208@person-t-qrqtw.mongodb.net/test?retryWrites=true&w=majority")
    db = conn.scrapy_items
    collection = db.IP
    res = collection.remove({'type': 'HTTP'})
# from time import sleep, time
# import threading
# from random import randint
#
#
# def install_wordpress(customer):
#     print('Start installation for', customer)
#     sleep(3)
#     print('All done for', customer)
#
#
# def developers_day(customers):
#     lock = threading.Lock()
#
#     def dev_day(id):
#         print('Goodmorning from developer', id)
#         lock.acquire()
#         while customers:
#             customer = customers.pop(0)
#             lock.release()
#             install_wordpress(customer)
#             lock.acquire()
#         lock.release()
#         print('Bye from developer', id)
#     devs = [threading.Thread(target=dev_day, args=(i, )) for i in range(5)]
#     [dev.start() for dev in devs]
#     [dev.join() for dev in devs]


# print('start at:', time())
# d = time()
# developers_day(["Customer %d" % i for i in range(5)])
# print(time()-d)


# if __name__=="__main__":
#     addr = '''北京 -
#     海淀区 -
#     西北旺\
#     - 丰秀中路3号院9号楼
#     '''
#     print(''.join(addr.split()))
