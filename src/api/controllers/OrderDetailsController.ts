import { Get, JsonController, OnUndefined, Param } from 'routing-controllers';

import { OrderDetailsNotFoundError } from '../errors/OrderDetailsNotFoundError';
import { OrderDetailsService } from '../services/OrderDetailsService';

// import OrderDetailsSchema from '../models/OrderDetails';

@JsonController('/order-details')
export class OrderDetailsController {

    constructor(
        private orderDetailsService: OrderDetailsService,
        private url: string = '/api/order-details'
    ) { }

    @Get()
    public find(): Promise<any> {
        return this.orderDetailsService.find(this.url);
    }

    @Get('/:order_id')
    @OnUndefined(OrderDetailsNotFoundError)
    public findOne(@Param('order_id') order_id: string): Promise<any> {
        const url = this.url + '/' + order_id;
        return this.orderDetailsService.findOne(url, order_id);
    }

}
