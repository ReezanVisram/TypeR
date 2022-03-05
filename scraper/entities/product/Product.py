from lib.database import db
from pony.orm import PrimaryKey, Required, Set


class Product(db.Entity):
    _table_ = 'products'
    id = PrimaryKey(int, auto=True)
    name = Required(str)
    link = Required(str)
    image_link = Required(str)
    price = Set('Price')
