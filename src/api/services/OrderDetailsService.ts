import { Service } from 'typedi';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { OrderDetailsRepository } from '../repositories/OrderDetailsRepository';

@Service()
export class OrderDetailsService {

    constructor(
        private orderDetailsRepository: OrderDetailsRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public find(): Promise<any> {
        this.log.info('Find all order details');
        return this.orderDetailsRepository.collection.find().toArray();
    }

    public findOne(order_id: string): Promise<any> {
        this.log.info('Find one order detail');
        return this.orderDetailsRepository.collection.findOne({ order_id: `${order_id}` });
    }

}
