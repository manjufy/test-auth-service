import { ApplicationError } from './ApplicationError';
export class BadRequestError extends ApplicationError {
    constructor(message: string, ...args: any) {
        super(400, message, args);
    }
}