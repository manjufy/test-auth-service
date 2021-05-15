import { ApplicationError } from './ApplicationError';
export class ServerError extends ApplicationError {
    constructor(message: string, ...args: any) {
        super(500, message, args);
    }
}