from lib.utils.shopify.ShopifyScraper import ShopifyScraper


def save_spacecables_products():
    spacecables_scraper = ShopifyScraper('spacecables')

    spacecables_scraper.save()
