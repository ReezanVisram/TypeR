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
from entities.productImage.ProductImage import ProductImage


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
                            product_title=self.get_title(product), link=self.get_link(sub, product), vendor=self.get_vendor(product), variants=self.get_variants(product), types=self.get_product_types(sub, product), images=self.get_product_images(product))
                        new_product.flush()
                    else:
                        self.get_current_prices(product)

    def save(self):
        self.get()

    def check_product_exists(self, product_name):
        return Product.exists(product_title=product_name)

    def get_title(self, product):
        return product['title']

    def get_link(self, sub, product):
        return f'{self.sitemap["base"]}/{sub}/products/{product["handle"]}'

    def get_vendor(self, product):
        return product['vendor']

    def get_product_types(self, sub, product):
        types = []

        for tag in product['tags']:
            new_type = ProductType(type=tag)
            types.append(new_type)

        if ('Switches' not in types and sub == 'switches'):
            types.append(ProductType(type='Switches'))

        return types

    def get_variants(self, product):
        variants = []

        for variant in product['variants']:
            if (variant['title'] == 'Default Title'):
                variant_title = product['title']
            else:
                variant_title = variant['title']

            new_variant = Variant(variant_title=variant_title, grams=variant['grams'], available=variant['available'], featured_image_id=self.get_variant_image(
                variant['featured_image']), prices=self.get_price(variant))
            new_variant.flush()
            variants.append(new_variant)

        return variants

    def get_variant_image(self, featured_image):
        if (featured_image):
            new_image = VariantImage(
                src=featured_image['src'], width=featured_image['width'], height=featured_image['height'])
            return new_image
        else:
            return None

    def get_product_images(self, product):
        images = []
        for image in product['images']:
            new_image = ProductImage(
                src=image['src'], width=image['width'], height=image['height'])
            new_image.flush()
            images.append(new_image)

        return images

    def get_price(self, variant):
        new_price = Price(price=variant['price'])
        return new_price

    def get_current_prices(self, product):
        for variant in product['variants']:
            new_price = Price(price=variant['price'], variant_id=(Variant.select(
                lambda v: v.variant_title == variant['title'] or (variant['title'] == 'Default Title' and v.variant_title == product['title']))).first())
            new_price.flush()
