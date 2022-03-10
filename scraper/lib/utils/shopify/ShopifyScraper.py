import requests
from lib.utils.Scraper import Scraper
from lib.utils.utils import get_relative_path_of_sitemap
from json import load


class ShopifyScraper(Scraper):
    def get(self):
        with open(get_relative_path_of_sitemap(self.site_name)) as file:
            data = load(file)

            for sub in data['subs']:
                print(sub)

    def save(self):
        self.get()
        # for product in self.products:
        #     print(product)
        pass
