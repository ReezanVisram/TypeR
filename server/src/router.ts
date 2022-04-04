import { Router, Request, Response } from 'express';
import { ProductsRouter } from './modules/products';
import { ProductsControllerContract } from './modules/products/types';
import { SwitchesRouter } from './modules/switches';
import { SwitchesControllerContract } from './modules/switches/types';

export const createRouter = (controllers: {
    productsController: ProductsControllerContract;
    switchesController: SwitchesControllerContract;
}): Router => {
    const router = Router();

    router.get('/', (req: Request, res: Response) =>
        res.json({ running: true })
    );

    router.use('/products', ProductsRouter(controllers));
    router.use('/switches', SwitchesRouter(controllers));

    return router;
};
