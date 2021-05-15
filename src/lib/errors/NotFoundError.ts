import { ApplicationError } from './ApplicationError';
export class NotFoundError extends ApplicationError {
    constructor(message: string, ...args: any) {
        super(404, message, args);
    }
}
