from lib.database import create_database_connection, db
from pony.orm import show, sql_debug
from entities.price import Price
from entities.product import Product


def initialize_database():
    create_database_connection()
    sql_debug(True)
    db.generate_mapping(create_tables=True)


def main():
    initialize_database()
    print('connection made')


if __name__ == '__main__':
    main()
