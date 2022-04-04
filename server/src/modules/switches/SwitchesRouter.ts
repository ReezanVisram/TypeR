import { Router, Request, Response } from 'express';
import { SwitchesControllerContract } from './types';

export function createSwitchesRouter(controllers: {
    switchesController: SwitchesControllerContract;
}): Router {
    const router = Router();

    const { switchesController } = controllers;

    router.get('/', async (req: Request, res: Response) => {
        const response = await switchesController.getAllSwitches();
        res.status(200).send(response);
    });

    router.get('/:id', async (req: Request, res: Response) => {
        const { id } = req.params;

        const response = await switchesController.getSwitchById(Number(id));
        res.status(200).send(response);
    });

    router.get('/linear', async (req: Request, res: Response) => {
        const response = await switchesController.getLinearSwitches();
        res.status(200).send(response);
    });

    router.get('/tactile', async (req: Request, res: Response) => {
        const response = await switchesController.getTactileSwitches();
        res.status(200).send(response);
    });

    router.get('/clicky', async (req: Request, res: Response) => {
        const response = await switchesController.getClickySwitches();
        res.status(200).send(response);
    });

    return router;
}
