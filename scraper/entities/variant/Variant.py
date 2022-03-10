from lib.database.createDatabaseConnection import db
from pony.orm import PrimaryKey, Required, Set, Optional


class Variant(db.Entity):
    _table_ = 'variants'
    id = PrimaryKey(int, auto=True)
    title = Required(str)
    grams = Required(float)
    available = Required(bool)
    featured_image = Optional('VariantImage')
    product = Required('Product')
    prices = Set('Price')
