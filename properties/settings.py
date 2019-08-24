# -*- coding: utf-8 -*-
import os
import sys
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE_DIR, 'properties'))

# Scrapy settings for properties project
#
# For simplicity, this file contains only settings considered important or
# commonly used. You can find more settings consulting the documentation:
#
#     https://docs.scrapy.org/en/latest/topics/settings.html
#     https://docs.scrapy.org/en/latest/topics/downloader-middleware.html
#     https://docs.scrapy.org/en/latest/topics/spider-middleware.html

BOT_NAME = 'properties'

SPIDER_MODULES = ['properties.spiders']
NEWSPIDER_MODULE = 'properties.spiders'


# Crawl responsibly by identifying yourself (and your website) on the user-agent
# USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36'
RANDOM_UA_TYPE = 'random'

# Obey robots.txt rules
ROBOTSTXT_OBEY = False

# Configure maximum concurrent requests performed by Scrapy (default: 16)
# 配置scrapy执行的最大并发请求
CONCURRENT_REQUESTS = 16

# Configure a delay for requests for the same website (default: 0)
# 为同一网站配置请求延迟，默认为0
# See https://docs.scrapy.org/en/latest/topics/settings.html#download-delay
# See also autothrottle settings and docs
# DOWNLOAD_TIMEOUT = 10
# DOWNLOAD_DELAY = 5
# The download delay setting will honor only one of:
# 下载延迟只会使用下面的其中一个,IP为非0时，DOMAIN不起作用
# CONCURRENT_REQUESTS_PER_DOMAIN = 16
# CONCURRENT_REQUESTS_PER_IP = 16

# Disable cookies (enabled by default)
# 是否启动Cookie
#COOKIES_ENABLED = False

# Disable Telnet Console (enabled by default)
# 是否使用Telnet控制台
#TELNETCONSOLE_ENABLED = False

# Override the default request headers:
# 设置请求头
DEFAULT_REQUEST_HEADERS = {
   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
   'Accept-Language': 'en',
}

# 爬虫终止条件
# CLOSESPIDER_ITEMCOUNT = 10
# CLOSESPIDER_PAGECOUNT = 10
# CLOSESPIDER_TIMEOUT = 10

# 设定最大深度
# DEPTH_LIMIT = 3

# Enable or disable spider middlewares
# 配置爬虫的中间件
# See https://docs.scrapy.org/en/latest/topics/spider-middleware.html
#SPIDER_MIDDLEWARES = {
#    'properties.middlewares.PropertiesSpiderMiddleware': 543,
#}

# Enable or disable downloader middlewares
# 配置下载器中间件
# See https://docs.scrapy.org/en/latest/topics/downloader-middleware.html
DOWNLOADER_MIDDLEWARES = {
   'properties.middlewares.RandomUserAgentMiddleware': 543,
   'scrapy.downloadermiddlewares.useragent.UserAgentMiddleware': None,

}

# Enable or disable extensions
# 是否启用扩展
# See https://docs.scrapy.org/en/latest/topics/extensions.html
#EXTENSIONS = {
#    'scrapy.extensions.telnet.TelnetConsole': None,
#}

# Configure item pipelines
# 是否配置管道
# See https://docs.scrapy.org/en/latest/topics/item-pipeline.html
ITEM_PIPELINES = {
   # 'properties.pipelines.PropertiesPipeline': 300,
   'properties.pipelines.MongoPipeline': 299,
   # 'scrapy.pipelines.images.ImagesPipeline': 1,
   # 'scrapy.pipelines.files.FilesPipeline': 2,
}
# 包含图片url的字段的名称
# IMAGE_URLS_FIELD = ''
# 包含图片下载的地址的字段的名称
# IMAGES_RESULT_FIELD = ''
# FILE_STORE = 'files'
IMAGES_STORE = 'images'
# # 代表90天过期
# FILE_EXPIRES = 90
# IMAGES_EXPIRES = 30
# IMAGES_THUMBS = {
#    'small': (50, 50),
#    'big': (270, 270),
# }
# # 图片过滤器
# IMAGES_MIN_HEIGHT = 110
# IMAGES_MIN_WIDTH = 110

# Enable and configure the AutoThrottle extension (disabled by default)
# 是否启用自动限速扩展
# See https://docs.scrapy.org/en/latest/topics/autothrottle.html
AUTOTHROTTLE_ENABLED = True
# The initial download delay
# 配置下载延迟
#AUTOTHROTTLE_START_DELAY = 5
# The maximum download delay to be set in case of high latencies
#AUTOTHROTTLE_MAX_DELAY = 60
# The average number of requests Scrapy should be sending in parallel to
# each remote server
#AUTOTHROTTLE_TARGET_CONCURRENCY = 1.0
# Enable showing throttling stats for every response received:
#AUTOTHROTTLE_DEBUG = False

# Enable and configure HTTP caching (disabled by default)
# See https://docs.scrapy.org/en/latest/topics/downloader-middleware.html#httpcache-middleware-settings
#HTTPCACHE_ENABLED = True
#HTTPCACHE_EXPIRATION_SECS = 0
#HTTPCACHE_DIR = 'httpcache'
#HTTPCACHE_IGNORE_HTTP_CODES = []
#HTTPCACHE_STORAGE = 'scrapy.extensions.httpcache.FilesystemCacheStorage'

# ITEM_PIPELINES = {'scrapyapperyio.ApperyIoPipeline': 300}
#
# APPERYIO_DB_ID = '5d4938c90f0d311790f9264e'
# APPERYIO_USERNAME = 'root'
# APPERYIO_PASSWORD = 'pass'
# APPERYIO_COLLECTION_NAME = 'properties'


MONGO_URL = 'mongodb+srv://x-tjl:0921shtjl1208@person-t-qrqtw.mongodb.net/test?retryWrites=true&w=majority'
MONGO_DATABASE = 'scrapy_items'



