import * as express from 'express';

import app from './server';
import errorHandler from "./lib/error.handler";
import Logger from './lib/Logger';

const initiliase = async () => {
    // Configure express middlewares
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Hide server information
    app.disable('x-powered-by');

    // Handle errors
    errorHandler(app);
};

export default app;

initiliase()
    .then(() => Logger.info(`Server is UP`))
    .catch(error => Logger.error(`Unknow Error: ${error}`));