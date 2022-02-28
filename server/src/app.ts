import { Application } from 'express';
import createApp from './lib/createApp';
import { createRouter } from './router';

export default function App(): Application {
    return createApp(createRouter({}));
}
