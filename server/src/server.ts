import express, { Request, Response } from 'express';
import { PORT } from '../lib/config';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
