from lib.database.initializeDatabase import initialize_database
from modules.kbdfans.KBDFans import save_kbd_fans_products
from modules.tokeebs.tokeebs import save_tokeebs_products
from modules.novelkeys.novelkeys import save_novelkeys_products
from modules.spacecables.spacecables import save_spacecables_products
import schedule
import time


def main():
    save_kbd_fans_products()
    save_tokeebs_products()
    save_novelkeys_products()
    save_spacecables_products()


schedule.every().day.do(main)

if __name__ == '__main__':
    initialize_database()
    while True:
        schedule.run_pending()
        time.sleep(1)
