from lib.database.createDatabaseConnection import db
from pony.orm import PrimaryKey, Required, Set, Optional


class Variant(db.Entity):
    _table_ = 'variants'
    id = PrimaryKey(int, auto=True)
    variant_title = Required(str)
    grams = Required(float)
    available = Required(bool)
    featured_image_id = Optional('VariantImage')
    product_id = Optional('Product')
    prices = Set('Price')
