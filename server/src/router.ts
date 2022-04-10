import { Router, Request, Response } from 'express';
import { DiyKitsControllerContract, DiyKitsRouter } from './modules/diyKits';
import { ProductsRouter } from './modules/products';
import { ProductsControllerContract } from './modules/products/types';
import { SwitchesRouter } from './modules/switches';
import { SwitchesControllerContract } from './modules/switches/types';

export const createRouter = (controllers: {
    productsController: ProductsControllerContract;
    switchesController: SwitchesControllerContract;
    diyKitsController: DiyKitsControllerContract;
}): Router => {
    const router = Router();

    router.get('/', (req: Request, res: Response) =>
        res.json({ running: true })
    );

    router.use('/products', ProductsRouter(controllers));
    router.use('/switches', SwitchesRouter(controllers));
    router.use('/diy-kits', DiyKitsRouter(controllers));

    return router;
};
