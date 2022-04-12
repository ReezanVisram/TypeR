from lib.database.initializeDatabase import initialize_database
from modules.kbdfans.KBDFans import save_kbd_fans_products
from modules.tokeebs.tokeebs import save_tokeebs_products
from modules.novelkeys.novelkeys import save_novelkeys_products


def main():
    initialize_database()
    save_kbd_fans_products()
    save_tokeebs_products()
    save_novelkeys_products()


if __name__ == '__main__':
    main()
