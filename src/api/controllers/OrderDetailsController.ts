import { Get, JsonController, OnUndefined, Param } from 'routing-controllers';

import { OrderDetailsNotFoundError } from '../errors/OrderDetailsNotFoundError';
import { OrderDetailsService } from '../services/OrderDetailsService';

// import OrderDetailsSchema from '../models/OrderDetails';

@JsonController('/order-details')
export class OrderDetailsController {

    constructor(
        private orderDetailsService: OrderDetailsService
    ) { }

    @Get()
    public find(): Promise<any> {
        return this.orderDetailsService.find();
    }

    @Get('/:order_id')
    @OnUndefined(OrderDetailsNotFoundError)
    public findOne(@Param('order_id') order_id: string): Promise<any> {
        return this.orderDetailsService.findOne(order_id);
    }

}
