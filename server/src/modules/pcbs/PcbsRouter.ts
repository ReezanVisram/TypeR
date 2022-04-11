import { Router, Request, Response } from 'express';
import { PcbsControllerContract } from './types';

export function createPcbsRouter(controllers: {
    pcbsController: PcbsControllerContract;
}) {
    const router = Router();

    const { pcbsController } = controllers;

    router.get('/', async (req: Request, res: Response) => {
        const response = await pcbsController.getAllPcbs();
        res.status(200).send(response);
    });

    return router;
}
