from lib.utils.shopify.ShopifyScraper import ShopifyScraper

def save_kbd_fans_products():
    kbdfans_scraper = ShopifyScraper('https://kbdfans.com/products.json')

    kbdfans_scraper.get()
    kbdfans_scraper.save()
