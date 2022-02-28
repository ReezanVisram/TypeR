import express, { Application, Router } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { FRONTEND_URL } from './config';

const corsMiddleware = cors({
    origin: [FRONTEND_URL],
    credentials: true,
});

export default function createApp(router: Router): Application {
    const app = express();

    app.use(express.json());
    app.use(cookieParser());

    app.use(corsMiddleware);
    app.use(router);

    return app;
}
