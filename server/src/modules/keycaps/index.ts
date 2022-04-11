import { Router } from 'express';
import { createKeycapsRouter } from './KeycapsRouter';
import KeycapsController from './KeycapsController';
import KeycapsService from './KeycapsService';
import { KeycapsControllerContract, KeycapsServiceContract } from './types';

export {
    KeycapsControllerContract,
    KeycapsServiceContract,
    KeycapsController,
    KeycapsService,
};

type Controllers = {
    keycapsController: KeycapsControllerContract;
};

export const KeycapsRouter = (controllers: Controllers): Router =>
    createKeycapsRouter(controllers);
