#!/usr/bin/python3
from scrapy.http import Request
from scrapy.loader import ItemLoader
from scrapy.item import Item, Field
import csv
import scrapy


class FromsvSpider(scrapy.Spider):
    name = 'fromcsv'

    def start_requests(self):
        with open('todo.csv', 'r')as f:
            reader = csv.DictReader(f)
            for line in reader:
                request = Request(line.pop('url'))
                request.meta['fields'] = line
                yield request

    def parse(self, response):
        item = Item()
        loader = ItemLoader(item=item, response=response)
        for name, xpath in response.meta['fields'].items():
            if xpath:
                item.fields[name] = Field()
                loader.add_xpath(name, xpath)

        yield loader.load_item()

