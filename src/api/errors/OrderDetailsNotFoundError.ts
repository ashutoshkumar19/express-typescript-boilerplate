import { HttpError } from 'routing-controllers';

export class OrderDetailsNotFoundError extends HttpError {
    constructor() {
        super(404, 'Order Details not found!');
    }
}
