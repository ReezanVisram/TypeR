import { createConnection } from 'typeorm';
import {
    MYSQL_HOST,
    MYSQL_USERNAME,
    MYSQL_ROOT_PASSWORD,
    MYSQL_DATABASE,
} from './config';

const createDatabaseConnection = async () => {
    await createConnection({
        type: 'mysql',
        host: MYSQL_HOST,
        database: MYSQL_DATABASE,
        username: MYSQL_USERNAME,
        password: MYSQL_ROOT_PASSWORD,
        entities: [`${__dirname}/../entities/*{.ts,.js}`],
    });
};

export default createDatabaseConnection;
