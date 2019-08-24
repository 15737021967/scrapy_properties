# -*- coding: utf-8 -*-
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule
from scrapy.loader import ItemLoader
from scrapy.loader.processors import MapCompose
from urllib import parse
from properties.items import PropertiesItem
import socket
import datetime


class EasySpider(CrawlSpider):
    name = 'tomobile'
    allowed_domains = ['scrapybook.s3.amazonaws.com']
    start_urls = [
        'http://scrapybook.s3.amazonaws.com/properties/index_00000.html'
    ]

    rules = (
        Rule(LinkExtractor(restrict_xpaths='//*[contains(@class, "next")]')),
        Rule(LinkExtractor(restrict_xpaths='//*[@itemprop="url"]'), callback='parse_item'),
    )

    def parse_item(self, response):
        """ This function parses a property page

        @url http://localhost:9312/properties/property_000000.html
        @returns items 1
        @scrapes title price description address image_urls
        @scrapes url project spider server date
        """
        loader = ItemLoader(item=PropertiesItem(), response=response)
        loader.add_xpath('title', '//*[@itemprop="name"][1]/text()', MapCompose(str.strip, str.title))
        loader.add_xpath('price', '//*[@itemprop="price"][1]/text()',
                         MapCompose(lambda i: i.replace(',', ''), float), re='[,.0-9]+')
        loader.add_xpath('description', '//*[@itemprop="description"][1]/text()',
                         MapCompose(str.strip, lambda i: i.replace('\r\n', ' ')))
        loader.add_xpath('address', '//*[@itemtype="http://schema.org/Place"][1]/text()', MapCompose(str.strip))
        loader.add_xpath('image_urls', '//*[@itemprop="image"][1]/@src',
                         MapCompose(lambda i: parse.urljoin(response.url, i)))

        loader.add_value('url', response.url)
        loader.add_value('project', self.settings.get('BOT_NAME'))
        loader.add_value('spider', self.name)
        loader.add_value('server', socket.gethostname())
        loader.add_value('date', datetime.datetime.now())
        yield loader.load_item()
