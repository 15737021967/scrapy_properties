#!/usr/bin/python3
# -*- coding: utf-8 -*- 
# @Time : 2019/8/22 19:49
# @Author : Tan
# @Email : 1531391246@qq.com
# @File : IPPool.py
# @Software: PyCharm
import requests
import pymongo
import threading
import time
from requests.exceptions import HTTPError
from datetime import datetime
from lxml.html import fromstring


class DownLoad(object):
    def __init__(self, proxy=None, header=None, delay=5):
        self.proxy = proxy or GetIP()
        self.headers = header
        self.delay = delay
        self.date = time.time()
        self.client = pymongo.MongoClient(
            ''
        )
        self.db = self.client['scrapy_items']

    def __call__(self, url):
        tree = self.downloader(url)
        if tree is None:
            print('HTTP ERROR!')
        else:
            ip_info = self.get_ips(tree)
            for ip in ip_info:
                if ip is None:
                    print('invalid ip and port')
                else:
                    print(ip)
                    try:
                        ip_in_db = self.db['IP'].find({'ip': ip['ip'], 'port': ip['port']})
                        if ip_in_db.count() == 1:
                            self.db['IP'].update(
                                {'ip': ip['ip'], 'port': ip['port']},
                                {
                                    'speed': ip['speed'],
                                    'connect_time': ip['connect_time'],
                                    'verification_time': ip['verification_time'],
                                }
                            )
                        else:
                            self.db['IP'].insert_one(ip)
                    except Exception as e:
                        print(e)

    def close(self):
        self.client.close()
        self.proxy.close()

    def downloader(self, url):
        try:
            delay_time = time.time() - self.date
            if delay_time < self.delay:
                time.sleep(delay_time)
            proxy = {'http': self.proxy.get_random_ip()}
            html = requests.get(url, headers=self.headers, proxies=proxy)
            self.date = time.time()
        except HTTPError as error:
            print(error)
        except Exception as e:
            print(e)
        else:
            try:
                tree = fromstring(html.text)
                return tree
            except Exception as e:
                print(e)
                return None
        return None

    def get_ips(self, tree):
        table = tree.xpath('//table[@id="ip_list"]//tr[@class]')
        for tr in table:
            ip_info = {}
            try:
                ip_info['ip'] = tr.xpath('.//td[2]/text()')[0]
                ip_info['port'] = tr.xpath('.//td[3]/text()')[0]
                ip_info['status'] = tr.xpath('.//td[5]/text()')[0]
                ip_info['type'] = tr.xpath('.//td[6]/text()')[0]
                ip_info['speed'] = float(tr.xpath('.//td[7]/div/@title')[0].split('秒')[0])
                ip_info['connect_time'] = float(tr.xpath('.//td[8]/div/@title')[0].split('秒')[0])
            except Exception as e:
                print(e)
                yield None
            if self.verification_ip(ip_info['ip'], ip_info['port'], ip_info['type']):
                ip_info['verification_time'] = datetime.now()
                yield ip_info
            else:
                print(ip_info['ip'], end='')
                yield None

    def verification_ip(self, ip, port, ip_type):
        if ip_type == 'HTTP':
            proxy_dict = {
                'http': 'http://%s:%s' % (ip, port),
            }
        else:
            proxy_dict = {
                'https': 'https://%s:%s' % (ip, port),
            }
        try:
            html = requests.get('https://hao.360.com/', headers=self.headers, proxies=proxy_dict,
                                timeout=5)
        except HTTPError as error:
            print(error)
            return False
        except Exception as e:
            print(e)
            return False
        else:
            if 200 <= html.status_code < 300:
                return True
            else:
                return False


def runspider(downloader, base_url, start_url, end_url):
    for num in range(start_url, end_url):
        url = base_url + str(num)
        downloader(url)


class GetIP(object):

    def __init__(self):
        self.client = pymongo.MongoClient(
            'mongodb+srv://x-tjl:0921shtjl1208@person-t-qrqtw.mongodb.net/test?retryWrites=true&w=majority',
        )
        self.db = self.client['scrapy_items']
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36',
        }

    def judge_ip(self, ip):
        proxy_dict = {
            'http': 'http://%s:%s' % (ip['ip'], ip['port']),
        }
        try:
            html = requests.get('https://hao.360.com/', headers=self.headers, proxies=proxy_dict,
                                timeout=5)
        except HTTPError as error:
            print(ip['ip'], error)
            return False
        except Exception as e:
            print(ip['ip'], e)
            return False
        else:
            if 200 <= html.status_code < 300:
                return True
            else:
                return False

    def get_random_ip(self):
        ip_info = self.db['IP'].aggregate([
            {'$sample': {'size': 1}},
        ])
        for ip in ip_info:
            if self.judge_ip(ip):
                return '%s://%s:%s' % (ip['type'].lower() or 'https', ip['ip'], ip['port'])
            else:
                self.delete_ip(ip)
                return self.get_random_ip()

    def delete_ip(self, ip):
        self.db['IP'].remove({'ip': ip['ip']})

    def close(self):
        self.client.close()


if __name__ == "__main__":
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36',
    }
    D = DownLoad(header=headers, proxy=None)
    nn_thread_list = [
        threading.Thread(target=runspider, args=(D, 'https://www.xicidaili.com/nn/', 1265 * i + 1, 1265 * (i + 1) + 1))
        for i in range(3)
    ]
    # nt_thread_list = [
    #     threading.Thread(target=runspider, args=(D, 'https://www.xicidaili.com/nt/', 147 * i + 1, 147 * (i + 1) + 1))
    #     for i in range(5)
    # ]
    #
    [thread.start() for thread in nn_thread_list]
    # [thread.start() for thread in nt_thread_list]
    [thread.join() for thread in nn_thread_list]
    # [thread.join() for thread in nt_thread_list]
    D.close()
    # proxy = {
    #     'http': 'http://118.178.182.47:23687',
    #     'https': 'https://140.143.48.49:1080',
    # }
    # get_ip = GetIP()
    # for i in range(5):
    #     ip_port = get_ip.get_random_ip()
    #
    # get_ip.close()
    # try:
    #     html_text = requests.get('https://hao.360.com/', headers=headers, proxies=proxy, timeout=5)
    # except HTTPError as err:
    #     print(err)
    # else:
    #     print(html_text.status_code)
    # date = datetime.now()
    # t = time.time()
    # time.sleep(3)
    # print(time.time()-t, datetime.now()-date)
