from lib.database import create_database_connection, db
from entities.price import Price
from entities.product import Product
from pony.orm import show, sql_debug


def main():
    create_database_connection()
    print('connection made')

    sql_debug(True)
    db.generate_mapping(create_tables=True)


if __name__ == '__main__':
    main()
