import { Router } from 'express';
import { createPcbsRouter } from './PcbsRouter';
import PcbsController from './PcbsController';
import PcbsService from './PcbsService';
import { PcbsControllerContract, PcbsServiceContract } from './types';

export {
    PcbsControllerContract,
    PcbsServiceContract,
    PcbsController,
    PcbsService,
};

type Controllers = {
    pcbsController: PcbsControllerContract;
};

export const PcbsRouter = (controllers: Controllers): Router =>
    createPcbsRouter(controllers);
