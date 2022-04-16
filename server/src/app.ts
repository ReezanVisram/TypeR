import { Application } from 'express';
import { VendorRepository } from './entities';
import ProductRepository from './entities/product/ProductRepository';
import createApp from './lib/createApp';
import { DiyKitsController, DiyKitsService } from './modules/diyKits';
import { KeycapsController, KeycapsService } from './modules/keycaps';
import { PcbsController, PcbsService } from './modules/pcbs';
import { ProductsController, ProductsService } from './modules/products';
import { SwitchesController, SwitchesService } from './modules/switches/';
import { VendorsController, VendorsService } from './modules/vendors';
import { createRouter } from './router';

export default function App(): Application {
    const productRepository = new ProductRepository();
    const vendorRepository = new VendorRepository();

    const productsService = new ProductsService(productRepository);
    const productsController = new ProductsController(productsService);

    const switchesService = new SwitchesService(productRepository);
    const switchesController = new SwitchesController(switchesService);

    const diyKitsService = new DiyKitsService(productRepository);
    const diyKitsController = new DiyKitsController(diyKitsService);

    const keycapsService = new KeycapsService(productRepository);
    const keycapsController = new KeycapsController(keycapsService);

    const pcbsService = new PcbsService(productRepository);
    const pcbsController = new PcbsController(pcbsService);

    const vendorsService = new VendorsService(vendorRepository);
    const vendorsController = new VendorsController(vendorsService);

    return createApp(
        createRouter({
            productsController,
            switchesController,
            diyKitsController,
            keycapsController,
            pcbsController,
            vendorsController,
        })
    );
}
