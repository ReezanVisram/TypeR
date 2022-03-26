import { Router, Request, Response } from 'express';
import { SwitchesControllerContract } from './types';

export function createSwitchesRouter(controllers: {
    switchesController: SwitchesControllerContract;
}): Router {
    const router = Router();

    const { switchesController } = controllers;
    router.get('/linear', async (req: Request, res: Response) => {
        const response = await switchesController.getLinearSwitches();
        res.status(200).send(response);
    });

    return router;
}
