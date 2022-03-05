from dotenv import load_dotenv
import os

load_dotenv()

MYSQL_HOST = os.environ['MYSQL_HOST']
MYSQL_USERNAME = os.environ['MYSQL_USERNAME']
MYSQL_ROOT_PASSWORD = os.environ['MYSQL_ROOT_PASSWORD']
MYSQL_DATABASE = os.environ['MYSQL_DATABASE']
MYSQL_PORT = os.environ['MYSQL_PORT']
