import requests
from lib.utils.Scraper import Scraper


class ShopifyScraper(Scraper):
    def get(self):
        self.products = requests.get(self.url).json()

    def save(self):
        print('saving products to database')
