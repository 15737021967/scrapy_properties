# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy
from scrapy.loader import ItemLoader
from scrapy.loader.processors import TakeFirst, MapCompose, Join
from w3lib.html import remove_tags


class PropertiesItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    title = scrapy.Field()
    price = scrapy.Field()
    description = scrapy.Field()
    address = scrapy.Field()
    image_urls = scrapy.Field()

    images = scrapy.Field()
    location = scrapy.Field()

    url = scrapy.Field()
    project = scrapy.Field()
    spider = scrapy.Field()
    server = scrapy.Field()
    date = scrapy.Field()


class BossZPItem(scrapy.Item):
    title = scrapy.Field()
    salary = scrapy.Field()
    company = scrapy.Field()


class ImageItem(scrapy.Item):
    images = scrapy.Field()
    image_urls = scrapy.Field()


def remove_splash(value: str):
    """去除数据中的斜线"""
    return value.replace('/', '')


def remove_space(value: str):
    """去除数据中的空格"""


class LagouLoader(ItemLoader):
    default_output_processor = TakeFirst()


class LagouItem(scrapy.Item):
    """拉勾网职位信息"""
    title = scrapy.Field()
    url = scrapy.Field()
    url_object_id = scrapy.Field()
    salary = scrapy.Field()
    job_city = scrapy.Field(
        input_processor=MapCompose(remove_splash, str.strip),
    )
    work_year = scrapy.Field(
        input_processor=MapCompose(remove_splash, ),
    )
    degree_need = scrapy.Field(
        input_processor=MapCompose(remove_splash, ),
    )
    job_type = scrapy.Field()
    publish_time = scrapy.Field()
    job_advantage = scrapy.Field()
    job_desc = scrapy.Field()
    job_addr = scrapy.Field(
        input_processor=MapCompose(remove_tags, lambda x: ''.join(x.replace('查看地图', '').split()), ),
    )
    company_name = scrapy.Field()
    company_url = scrapy.Field()
    tags = scrapy.Field(
        input_processor=Join(".")
    )
    crawl_time = scrapy.Field()
