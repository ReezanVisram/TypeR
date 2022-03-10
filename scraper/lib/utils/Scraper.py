from abc import ABC, abstractmethod


class Scraper(ABC):
    def __init__(self, site_name):
        self.site_name = site_name
        self.products = []

    @abstractmethod
    def get(self):
        pass

    @abstractmethod
    def save(self):
        pass
