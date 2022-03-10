from lib.database.createDatabaseConnection import db
from pony.orm import PrimaryKey, Required, Set


class ProductType(db.Entity):
    _table_ = 'product_types'
    id = PrimaryKey(int, auto=True)
    type = Required(str)
    products = Set('Product', column='product_id')
