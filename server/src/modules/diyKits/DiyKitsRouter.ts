import { Router, Request, Response } from 'express';
import { DiyKitsControllerContract } from './types';

export function createDiyKitsRouter(controllers: {
    diyKitsController: DiyKitsControllerContract;
}): Router {
    const router = Router();

    const { diyKitsController } = controllers;

    router.get('/', async (req: Request, res: Response) => {
        const response = await diyKitsController.getAllDiyKits();
        res.status(200).send(response);
    });

    return router;
}
