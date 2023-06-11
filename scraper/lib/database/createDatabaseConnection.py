from pony.orm import Database, sql_debug
from lib.config import MYSQL_UNIX_SOCKET, MYSQL_USERNAME, MYSQL_ROOT_PASSWORD, MYSQL_DATABASE

db = Database()


def create_database_connection():
    db.bind(
        provider="mysql",
        unix_socket=f"/cloudsql/{MYSQL_UNIX_SOCKET}",
        user=MYSQL_USERNAME,
        passwd=MYSQL_ROOT_PASSWORD,
        database=MYSQL_DATABASE,
    )
