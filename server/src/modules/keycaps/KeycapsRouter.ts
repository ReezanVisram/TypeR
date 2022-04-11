import { Router, Request, Response } from 'express';
import { KeycapsControllerContract } from './types';

export function createKeycapsRouter(controllers: {
    keycapsController: KeycapsControllerContract;
}): Router {
    const router = Router();

    const { keycapsController } = controllers;

    router.get('/', async (req: Request, res: Response) => {
        const response = await keycapsController.getAllKeycaps();
        res.status(200).send(response);
    });

    return router;
}
