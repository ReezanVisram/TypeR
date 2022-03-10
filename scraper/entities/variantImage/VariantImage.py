from lib.database.createDatabaseConnection import db
from pony.orm import PrimaryKey, Required


class VariantImage(db.Entity):
    _table_ = 'variant_images'
    id = PrimaryKey(int, auto=True)
    src = Required(str)
    width = Required(int)
    height = Required(int)
    variant = Required('Variant')
