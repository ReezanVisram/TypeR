from lib.utils.shopify.ShopifyScraper import ShopifyScraper


def save_kbd_fans_products():
    kbdfans_scraper = ShopifyScraper('kbdfans')

    kbdfans_scraper.save()
