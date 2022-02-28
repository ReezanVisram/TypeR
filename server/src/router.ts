import { Router, Request, Response } from 'express';

export const createRouter = (controllers: {}): Router => {
    const router = Router();

    router.get('/', (req: Request, res: Response) =>
        res.json({ running: true })
    );

    return router;
};
