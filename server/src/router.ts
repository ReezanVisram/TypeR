import { Router, Request, Response } from 'express';
import { SwitchesRouter } from './modules/switches';
import { SwitchesControllerContract } from './modules/switches/types';

export const createRouter = (controllers: {
    switchesController: SwitchesControllerContract;
}): Router => {
    const router = Router();

    router.get('/', (req: Request, res: Response) =>
        res.json({ running: true })
    );

    router.use('/switches', SwitchesRouter(controllers));

    return router;
};
