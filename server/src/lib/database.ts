import { createConnection } from 'typeorm';
import {
    MYSQL_HOST,
    MYSQL_USERNAME,
    MYSQL_ROOT_PASSWORD,
    MYSQL_DATABASE,
    MYSQL_SOCKET_PATH
} from './config';
import * as path from 'path';

let retries = 0;
const createDatabaseConnection = async () => {
    if (retries >= 3) {
        console.log('Attempted to connect to databse 3 times, disconnecting');
        return;
    }
    try {
        await createConnection({
            type: 'mysql',
            host: MYSQL_HOST,
            database: MYSQL_DATABASE,
            username: MYSQL_USERNAME,
            password: MYSQL_ROOT_PASSWORD,
            entities: [path.join(__dirname, '/../entities/**/*{.js,.ts}')],
            extra: {
                socketPath: MYSQL_SOCKET_PATH,
            },
            synchronize: true,
        });
    } catch {
        console.log(`Unable to connect to database, retrying (${retries})`);
        retries++;
        setTimeout(createDatabaseConnection, 2500);
    }
};

export default createDatabaseConnection;
