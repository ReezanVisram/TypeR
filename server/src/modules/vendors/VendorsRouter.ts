import { Router, Request, Response } from 'express';
import { VendorsControllerContract } from './types';

export function createVendorsRouter(controllers: {
    vendorsController: VendorsControllerContract;
}): Router {
    const router = Router();

    const { vendorsController } = controllers;

    router.get('/', async (req: Request, res: Response) => {
        const response = await vendorsController.getAllVendors();
        res.status(200).send(response);
    });

    return router;
}
