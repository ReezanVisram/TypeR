import { Router } from 'express';
import { createProductsRouter } from './ProductsRouter';
import ProductsController from './ProductsController';
import ProductsService from './ProductsService';
import { ProductsControllerContract, ProductsServiceContract } from './types';

export {
    ProductsControllerContract,
    ProductsServiceContract,
    ProductsController,
    ProductsService,
};

type Controllers = {
    productsController: ProductsControllerContract;
};

export const ProductsRouter = (controllers: Controllers): Router =>
    createProductsRouter(controllers);
