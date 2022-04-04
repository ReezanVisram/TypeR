import { Application } from 'express';
import ProductRepository from './entities/product/ProductRepository';
import createApp from './lib/createApp';
import { ProductsController, ProductsService } from './modules/products';
import { SwitchesController, SwitchesService } from './modules/switches/';
import { createRouter } from './router';

export default function App(): Application {
    const productRepository = new ProductRepository();

    const productsService = new ProductsService(productRepository);
    const productsController = new ProductsController(productsService);

    const switchesService = new SwitchesService(productRepository);
    const switchesController = new SwitchesController(switchesService);

    return createApp(createRouter({ productsController, switchesController }));
}
