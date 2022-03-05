from pony import orm
from lib.config import MYSQL_HOST, MYSQL_USERNAME, MYSQL_ROOT_PASSWORD, MYSQL_DATABASE

db = orm.Database()


def create_database_connection():
    db.bind(provider='mysql', host=MYSQL_HOST, user=MYSQL_USERNAME,
            passwd=MYSQL_ROOT_PASSWORD, database=MYSQL_DATABASE)
