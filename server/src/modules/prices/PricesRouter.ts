import { Router, Request, Response } from 'express';

export function createPricesRouter(): Router {
    const router = Router();

    router.get('/', (req: Request, res: Response) => {
        res.send('Prices');
    });

    return router;
}
