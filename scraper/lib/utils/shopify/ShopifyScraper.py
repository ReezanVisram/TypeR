import requests
from lib.utils.Scraper import Scraper
from lib.utils.utils import get_relative_path_of_sitemap
from json import load

from pony.orm import db_session

from entities.product.Product import Product
from entities.productType.ProductType import ProductType
from entities.variant.Variant import Variant
from entities.variantImage.VariantImage import VariantImage
from entities.price.Price import Price


class ShopifyScraper(Scraper):
    @db_session
    def get(self):
        with open(get_relative_path_of_sitemap(self.site_name)) as file:
            self.sitemap = load(file)

            for sub in self.sitemap['subs']:
                products = requests.get(
                    f'{self.sitemap["base"]}/{sub}/products.json').json()['products']

                for product in products:
                    if (not self.check_product_exists(product['title'])):
                        new_product = Product(
                            title=self.get_title(product), link=self.get_link(sub, product), vendor=self.get_vendor(product), variants=self.get_variants(product), types=self.get_product_types(product))
                        new_product.flush()

    def save(self):
        self.get()
        # for product in self.products:
        #     print(product)
        pass

    def check_product_exists(self, product_name):
        return Product.exists(title=product_name)

    def get_title(self, product):
        return product['title']

    def get_link(self, sub, product):
        return f'{self.sitemap["base"]}/{sub}/products/{product["handle"]}'

    def get_vendor(self, product):
        return product['vendor']

    def get_product_types(self, product):
        types = []

        for tag in product['tags']:
            new_type = ProductType(type=tag)
            types.append(new_type)

        return types

    def get_variants(self, product):
        variants = []

        for variant in product['variants']:
            new_variant = Variant(title=variant['title'], grams=variant['grams'], available=variant['available'], featured_image=self.get_image(
                variant['featured_image']), prices=self.get_price(variant))
            new_variant.flush()
            variants.append(new_variant)

        return variants

    def get_image(self, featured_image):
        if (featured_image):
            new_image = VariantImage(
                src=featured_image['src'], width=featured_image['width'], height=featured_image['height'])
            return new_image
        else:
            return None

    def get_price(self, variant):
        new_price = Price(price=variant['price'])
        return new_price
