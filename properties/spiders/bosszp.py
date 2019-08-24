# -*- coding: utf-8 -*-
from scrapy.http import Request
from scrapy.linkextractors import LinkExtractor
from scrapy.loader import ItemLoader
from scrapy.loader.processors import MapCompose
from scrapy.spiders import CrawlSpider, Rule
from urllib import parse
from properties.items import BossZPItem


class BossZPSpider(CrawlSpider):
    name = 'bosszp'

    def start_requests(self):
        return [
            Request(
                "https://www.51job.com/",
                callback=self.parse_weclome
            )
        ]

    def parse_weclome(self, response):
        return Request("https://search.51job.com/list/080200,000000,0000,00,9,99,Python%2520%25E5%25BC%2580%25E5%258F%2591,2,1.html?lang=c&stype=&postchannel=0000&workyear=99&cotype=99&degreefrom=99&jobterm=99&companysize=99&providesalary=99&lonlat=0%2C0&radius=-1&ord_field=0&confirmdate=9&fromType=&dibiaoid=0&address=&line=&specialarea=00&from=&welfare=")

    def parse_item(self, selector):
        loader = ItemLoader(item=BossZPItem(), selector=selector)
        loader.add_xpath('title', './/a[@onmousedown]/@title', MapCompose(str.strip))
        loader.add_xpath('salary', './/span[@class="t4"]/text()', MapCompose(str.strip))
        loader.add_xpath('company', './/span[@class="t2"]/a/@title', MapCompose(str.strip))
        yield loader.load_item()

    def parse(self, response):
        next_url = response.xpath('//li[@class="bk"]/a/@href')
        for url in next_url.extract():
            yield Request(parse.urljoin(response.url, url))

        item_selector = response.xpath('//div[@class="el" and not(@id)]')
        for selector in item_selector:
            yield self.parse_item(selector)

