import { Router } from 'express';
import { createDiyKitsRouter } from './DiyKitsRouter';
import DiyKitsController from './DiyKitsController';
import DiyKitsService from './DiyKitsService';
import { DiyKitsControllerContract, DiyKitsServiceContract } from './types';

export {
    DiyKitsControllerContract,
    DiyKitsServiceContract,
    DiyKitsController,
    DiyKitsService,
};

type Controllers = {
    diyKitsController: DiyKitsControllerContract;
};

export const DiyKitsRouter = (controllers: Controllers): Router =>
    createDiyKitsRouter(controllers);
