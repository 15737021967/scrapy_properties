# -*- coding: utf-8 -*-
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule
from items import LagouItem, LagouLoader
from utils.common import get_md5
from datetime import datetime


class LagouSpider(CrawlSpider):
    name = 'lagou'
    allowed_domains = ['www.lagou.com']
    start_urls = ['https://www.lagou.com/']

    rules = (
        Rule(LinkExtractor(allow=r'^https://www.lagou.com/jobs/\d+.html$'), callback='parse_item', follow=True),
        Rule(LinkExtractor(allow=(r'zhaopin/.*', )), follow=True),
        Rule(LinkExtractor(allow=(r'gongsi/j\d+.html/.*',)), follow=True),

    )

    def parse_item(self, response):
        """解析拉勾网的职位"""
        loader = LagouLoader(item=LagouItem(), response=response)
        loader.add_xpath('title', '//div[@class="job-name"]/@title')
        loader.add_value('url', response.url)
        loader.add_value('url_object_id', get_md5(response.url))
        loader.add_xpath('salary', '//dd[@class="job_request"]//span[@class="salary"]/text()')
        loader.add_xpath('job_city', '//dd[@class="job_request"]//span[2]/text()')
        loader.add_xpath('work_year', '//dd[@class="job_request"]//span[3]/text()')
        loader.add_xpath('degree_need', '//dd[@class="job_request"]//span[4]/text()')
        loader.add_xpath('job_type', '//dd[@class="job_request"]//span[5]/text()')
        loader.add_xpath('publish_time', '//p[@class="publish_time"]/text()')
        loader.add_xpath('tags', '//ul[contains(@class, "position-label")]/li/text()')
        loader.add_xpath('job_advantage', '//dd[@class="job-advantage"]/p/text()')
        loader.add_xpath('job_desc', '//dd[@class="job_bt"]/div')
        loader.add_xpath('job_addr', '//div[@class="work_addr"]')
        loader.add_xpath('company_name', '//dl[@id="job_company"]/dt/a/img/@alt')
        loader.add_xpath('company_url', '//dl[@id="job_company"]/dt/a/@href')
        loader.add_value('crawl_time', datetime.now())

        job_item = loader.load_item()

        return job_item
