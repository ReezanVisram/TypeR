from abc import ABC, abstractmethod

class Scraper(ABC):
    def __init__(self, url):
        self.url = url
    
    @abstractmethod
    def get(self):
        pass

    @abstractmethod
    def save(self):
        pass