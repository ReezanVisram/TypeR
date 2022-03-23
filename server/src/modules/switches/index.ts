import { Router } from 'express';
import { createSwitchesRouter } from './SwitchesRouter';
import SwitchesController from './SwitchesController';
import SwitchesService from './SwitchesService';
import { SwitchesControllerContract, SwitchesServiceContract } from './types';

export {
    SwitchesControllerContract,
    SwitchesServiceContract,
    SwitchesController,
    SwitchesService,
};

type Controllers = {
    switchesController: SwitchesControllerContract;
};

export const SwitchesRouter = (controllers: Controllers): Router =>
    createSwitchesRouter(controllers);
