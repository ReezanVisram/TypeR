from lib.database.createDatabaseConnection import db
from pony.orm import PrimaryKey, Required, Set


class Product(db.Entity):
    _table_ = 'products'
    id = PrimaryKey(int, auto=True)
    title = Required(str)
    link = Required(str)
    vendor = Required(str)
    variants = Set('Variant')
    types = Set('ProductType', table='products_product_types',
                column='product_type_id')
