import { Application } from 'express';
import ProductRepository from './entities/product/ProductRepository';
import createApp from './lib/createApp';
import { SwitchesController, SwitchesService } from './modules/switches/';
import { createRouter } from './router';

export default function App(): Application {
    const productRepository = new ProductRepository();
    const switchesService = new SwitchesService(productRepository);
    const switchesController = new SwitchesController(switchesService);

    return createApp(createRouter({ switchesController }));
}
