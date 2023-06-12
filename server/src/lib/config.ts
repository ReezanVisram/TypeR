import dotenv from 'dotenv';

dotenv.config();

export const {
    PORT = Number(process.env.BACKEND_PORT) || 3000,
    FRONTEND_URL = '',

    MYSQL_HOST = '',
    MYSQL_USERNAME = '',
    MYSQL_ROOT_PASSWORD = '',
    MYSQL_DATABASE = '',
    MYSQL_SOCKET_PATH = '',
} = process.env;