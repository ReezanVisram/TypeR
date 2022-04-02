from lib.database.createDatabaseConnection import db
from pony.orm import PrimaryKey, Required, Optional


class ProductImage(db.Entity):
    _table_ = 'product_images'
    id = PrimaryKey(int, auto=True)
    src = Required(str)
    width = Required(int)
    height = Required(int)
    product_id = Optional('Product')
