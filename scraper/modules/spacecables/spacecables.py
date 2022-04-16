from lib.utils.shopify.ShopifyScraper import ShopifyScraper


def save_spacecables_products():
    spacecables_scraper = ShopifyScraper('Spacecables')

    spacecables_scraper.save()
