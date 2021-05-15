import { Application, Request, Response, NextFunction } from 'express';
import { NotFoundError } from '../errors';
import Logger from './Logger';

export default (app: Application) => {
    // Lost resort
    app.use(() => {
        throw new NotFoundError("Resource not found.");
    });

    // Log all errors
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        Logger.error(`Error occured`, err);

        let status: number;
        let message: string;

        // Check if error has a code
        if (err.code) {
            status = err.code;
            message = err.message;
        } else {
            status = 500;
            message = "Internal server error."
        }

        // Check if headers wasn't sent already
        if (!res.headersSent) {
            return res.status(status).send({
                message
            });
        }

        next(err);
    });
}
