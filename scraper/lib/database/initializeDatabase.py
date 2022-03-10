from lib.database.createDatabaseConnection import create_database_connection, db
from entities.price import Price
from entities.productType import ProductType
from entities.product import Product
from pony.orm import show, sql_debug


def initialize_database():
    create_database_connection()
    sql_debug(True)
    db.generate_mapping(create_tables=True)