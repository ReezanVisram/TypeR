import requests
from lib.utils.Scraper import Scraper
from lib.utils.utils import get_relative_path_of_sitemap
from os import path


class ShopifyScraper(Scraper):
    def get(self):
        with open(get_relative_path_of_sitemap(self.site_name)) as file:
            print(file.read())

    def save(self):
        self.get()
        # for product in self.products:
        #     print(product)
        print('hello')
