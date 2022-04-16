from lib.utils.shopify.ShopifyScraper import ShopifyScraper


def save_tokeebs_products():
    tokeebs_scraper = ShopifyScraper('Tokeebs')

    tokeebs_scraper.save()
