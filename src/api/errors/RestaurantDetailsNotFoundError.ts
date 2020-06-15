import { HttpError } from 'routing-controllers';

export class RestaurantDetailsNotFoundError extends HttpError {
    constructor() {
        super(404, 'Restaurant Details not found!');
    }
}
