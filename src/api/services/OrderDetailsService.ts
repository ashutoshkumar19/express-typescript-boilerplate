import { Service } from 'typedi';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { OrderDetailsRepository } from '../repositories/OrderDetailsRepository';

@Service()
export class OrderDetailsService {

    constructor(
        private orderDetailsRepository: OrderDetailsRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public async find(url: string): Promise<any> {
        const res = await this.orderDetailsRepository.collection.find().toArray();
        this.logData(url, 'Find all order details', res);
        return res;
    }

    public async findOne(url: string, order_id: string): Promise<any> {
        const res = await this.orderDetailsRepository.collection.findOne({ order_id: `${order_id}` });
        this.logData(url, 'Find one order detail', res);
        return res;
    }

    public logData(_url: string, _description: string, res: any): any {
        try {
            const logData = {
                type: 'Response',
                url: _url,
                description: _description,
                response: res,
            };
            this.log.info(JSON.stringify(logData));

        } catch (error) {
            this.log.error(error);
        }
    }

}
