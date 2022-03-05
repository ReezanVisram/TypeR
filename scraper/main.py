from lib.database.initializeDatabase import initialize_database
from entities.price import Price
from entities.product import Product


def main():
    initialize_database()
    print('connection made')


if __name__ == '__main__':
    main()
