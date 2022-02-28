import { createServer } from 'http';
import App from './app';
import { PORT } from './lib/config';
import createDatabaseConnection from './lib/database';

async function startServer() {
    await createDatabaseConnection();
    const server = createServer(App());
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

try {
    startServer();
} catch (error) {
    console.log(error);
}
