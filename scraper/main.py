from lib.database.initializeDatabase import initialize_database
from modules.kbdfans.KBDFans import save_kbd_fans_products


def main():
    initialize_database()
    save_kbd_fans_products()
    print('connection made')


if __name__ == '__main__':
    main()
