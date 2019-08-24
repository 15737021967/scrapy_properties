# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
from scrapy.exporters import JsonItemExporter
from twisted.enterprise import adbapi
import pymongo
import json


class PropertiesPipeline(object):
    def process_item(self, item, spider):
        return item


class MongoPipeline(object):

    collection_name = 'lagou'

    def __init__(self, mongo_url, mongo_db):
        self.mongo_url = mongo_url
        self.mongo_db = mongo_db

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            mongo_url=crawler.settings.get('MONGO_URL'),
            mongo_db=crawler.settings.get('MONGO_DATABASE', 'scrapy_items')
        )

    def open_spider(self, spider):

        self.client = pymongo.MongoClient(self.mongo_url)
        self.db = self.client[self.mongo_db]

    def close_spider(self, spider):
        self.client.close()

    def process_item(self, item, spider):

        res = self.db[self.collection_name].find({'url_object_id': item['url_object_id']})
        if res.count() == 1:
            self.db[self.collection_name].update(
                {'url_object_id': item['url_object_id']},
                {'$set': {'job_desc': item['job_desc'], 'salary': item['salary']}}
            )
        else:
            self.db[self.collection_name].insert_one(dict(item))
        return item


class JsonWithEncodingPipeline(object):
    def __init__(self):
        self.file = open('out.json', 'w', encoding='utf-8')

    def process_item(self, item, spider):
        lines = json.dumps(dict(item), ensure_ascii=False) + '\n'
        self.file.write(lines)
        return item

    def close_spider(self, spider):
        self.file.close()


class JsonExporterPipline(object):
    def __init__(self):
        self.file = open('out.json', 'w')
        self.exporter = JsonItemExporter(self.file, encoding='utf-8', ensure_ascii=False)
        self.exporter.start_exporting()

    def close_spider(self, spider):
        self.exporter.finish_exporting()
        self.file.close()

    def process_item(self, item, spider):
        self.exporter.export_item(item)
        return item


class MongoDBTwistedPipline(object):

    @classmethod
    def from_crawler(cls, crawler):
        adbapi.ConnectionPool()
