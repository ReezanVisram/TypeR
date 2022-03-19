from lib.database.createDatabaseConnection import db
from pony.orm import PrimaryKey, Required, Optional
from decimal import Decimal
from datetime import datetime


class Price(db.Entity):
    _table_ = 'prices'
    id = PrimaryKey(int, auto=True)
    price = Required(Decimal, 10, 4)
    price_date = Required(datetime, default=datetime.now)
    variant_id = Optional('Variant')
