from lib.database.createDatabaseConnection import db
from pony.orm import PrimaryKey, Required, Optional


class ProductType(db.Entity):
    _table_ = 'product_types'
    id = PrimaryKey(int, auto=True)
    type = Required(str)
    product_id = Optional('Product')
