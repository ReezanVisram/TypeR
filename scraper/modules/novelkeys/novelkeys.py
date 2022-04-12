from lib.utils.shopify.ShopifyScraper import ShopifyScraper


def save_novelkeys_products():
    novelkeys_scraper = ShopifyScraper('novelkeys')

    novelkeys_scraper.save()
