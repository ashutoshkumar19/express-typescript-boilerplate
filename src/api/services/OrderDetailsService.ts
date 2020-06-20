import { Service } from 'typedi';

import { ResponseLogMiddleware } from '../middlewares/ResponseLogMiddleware';
import { OrderDetailsRepository } from '../repositories/OrderDetailsRepository';

@Service()
export class OrderDetailsService {

    constructor(
        private orderDetailsRepository: OrderDetailsRepository,
        private log: ResponseLogMiddleware
    ) { }

    public async find(url: string): Promise<any> {
        const res = await this.orderDetailsRepository.collection.find().toArray();
        this.log.logResponse(url, 'Find all order details', res);
        return res;
    }

    public async findOne(url: string, order_id: string): Promise<any> {
        const res = await this.orderDetailsRepository.collection.findOne({ order_id: `${order_id}` });
        this.log.logResponse(url, 'Find one order detail', res);
        return res;
    }

}
