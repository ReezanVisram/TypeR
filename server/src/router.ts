import { Router, Request, Response } from 'express';
import { DiyKitsControllerContract, DiyKitsRouter } from './modules/diyKits';
import { KeycapsControllerContract, KeycapsRouter } from './modules/keycaps';
import { PcbsControllerContract, PcbsRouter } from './modules/pcbs';
import { ProductsRouter } from './modules/products';
import { ProductsControllerContract } from './modules/products/types';
import { SwitchesRouter } from './modules/switches';
import { SwitchesControllerContract } from './modules/switches/types';
import { VendorsControllerContract, VendorsRouter } from './modules/vendors';

export const createRouter = (controllers: {
    productsController: ProductsControllerContract;
    switchesController: SwitchesControllerContract;
    diyKitsController: DiyKitsControllerContract;
    keycapsController: KeycapsControllerContract;
    pcbsController: PcbsControllerContract;
    vendorsController: VendorsControllerContract;
}): Router => {
    const router = Router();

    router.get('/', (req: Request, res: Response) =>
        res.json({ running: true })
    );

    router.use('/products', ProductsRouter(controllers));
    router.use('/switches', SwitchesRouter(controllers));
    router.use('/diy-kits', DiyKitsRouter(controllers));
    router.use('/keycaps', KeycapsRouter(controllers));
    router.use('/pcbs', PcbsRouter(controllers));
    router.use('/vendors', VendorsRouter(controllers));

    return router;
};
