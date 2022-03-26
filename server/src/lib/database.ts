import { createConnection } from 'typeorm';
import {
    MYSQL_HOST,
    MYSQL_USERNAME,
    MYSQL_ROOT_PASSWORD,
    MYSQL_DATABASE,
} from './config';

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
            entities: [`${__dirname}/../entities/*{.ts,.js}`],
            synchronize: true,
        });
    } catch {
        console.log(`Unable to connect to database, retrying (${retries})`);
        retries++;
        setTimeout(createDatabaseConnection, 2500);
    }
};

export default createDatabaseConnection;
