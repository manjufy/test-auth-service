import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
dotenv.config({path: __dirname + '/.env'})

import Logger from './lib/Logger';
import errorHandler from "./lib/error.handler";
// get IoC container
import container from './di-container';

const PORT = process.env.PORT || 8080;
// start the server
const server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

        // Handle errors
    errorHandler(app);
});

const appInstance = server.build();
appInstance.listen(PORT);

Logger.info(`Server started on port ${PORT}`)

// export default appInstance;