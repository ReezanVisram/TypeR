from lib.database.createDatabaseConnection import db
from pony.orm import PrimaryKey, Required


class Vendor(db.Entity):
    _table_ = 'vendors'
    id = PrimaryKey(int, auto=True)
    name = Required(str)
    link = Required(str)
