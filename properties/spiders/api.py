# -*- coding: utf-8 -*-
from scrapy.loader import ItemLoader
from scrapy.loader.processors import MapCompose
from scrapy.http import Request
from urllib import parse
from properties.items import PropertiesItem
import scrapy
import socket
import datetime
import json


class ApiSpider(scrapy.Spider):
    name = 'api'
    allowed_domains = ['localhost']
    start_urls = [
        'http://localhost:9312/properties/api.json',
    ]

    def parse_item(self, response):
        """ This function parses a property page

        @url http://localhost:9312/properties/property_000000.html
        @returns items 1
        @scrapes title price description address image_urls
        @scrapes url project spider server date
        """
        loader = ItemLoader(item=PropertiesItem(), response=response)
        loader.add_xpath('price', '//*[@itemprop="price"][1]/text()',
                         MapCompose(lambda i: i.replace(',', ''), float), re='[,.0-9]+')
        loader.add_xpath('description', '//*[@itemprop="description"][1]/text()',
                         MapCompose(str.strip, lambda i: i.replace('\r\n', ' ')))
        loader.add_xpath('address', '//*[@itemtype="http://schema.org/Place"][1]/text()', MapCompose(str.strip))
        loader.add_xpath('image_urls', '//*[@itemprop="image"][1]/@src',
                         MapCompose(lambda i: parse.urljoin(response.url, i)))

        loader.add_value('title', response.meta['title'], MapCompose(str.strip, str.title))
        loader.add_value('url', response.url)
        loader.add_value('project', self.settings.get('BOT_NAME'))
        loader.add_value('spider', self.name)
        loader.add_value('server', socket.gethostname())
        loader.add_value('date', datetime.datetime.now())
        yield loader.load_item()

    def parse(self, response):
        base_url = "http://localhost:9312/properties/"
        js = json.loads(response.body)
        for item in js:
            id = item["id"]
            title = item["title"]
            url = base_url + "property_%06d.html" % id
            yield Request(url, meta={'title': title}, callback=self.parse_item)
