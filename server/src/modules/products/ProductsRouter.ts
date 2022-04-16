import { Router, Request, Response } from 'express';
import { ProductsControllerContract } from './types';

export function createProductsRouter(controllers: {
    productsController: ProductsControllerContract;
}): Router {
    const router = Router();

    const { productsController } = controllers;

    router.get('/numbers', async (req: Request, res: Response) => {
        const response = await productsController.getProductNumbers();
        res.status(200).send(response);
    });

    router.get('/:id', async (req: Request, res: Response) => {
        const { id } = req.params;

        const response = await productsController.getProductById(Number(id));
        res.status(200).send(response);
    });

    return router;
}
