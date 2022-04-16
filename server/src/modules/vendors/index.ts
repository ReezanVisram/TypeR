import { Router } from 'express';
import { createVendorsRouter } from './VendorsRouter';
import VendorsController from './VendorsController';
import VendorsService from './VendorsService';
import { VendorsControllerContract, VendorsServiceContract } from './types';

export {
    VendorsControllerContract,
    VendorsServiceContract,
    VendorsService,
    VendorsController,
};

type Controllers = {
    vendorsController: VendorsControllerContract;
};

export const VendorsRouter = (controllers: Controllers) =>
    createVendorsRouter(controllers);
