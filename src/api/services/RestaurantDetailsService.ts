import { Service } from 'typedi';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { RestaurantDetailsRepository } from '../repositories/RestaurantDetailsRepository';

@Service()
export class RestaurantDetailsService {

    constructor(
        private restaurantDetailsRepository: RestaurantDetailsRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public async find(url: string): Promise<any> {
        const res = await this.restaurantDetailsRepository.collection.find().toArray();
        this.logData(url, 'Find all restaurant details', res);
        return res;
    }

    public async findOne(url: string, id: string): Promise<any> {
        const res = await this.restaurantDetailsRepository.collection.findOne({ id: `${id}` });
        this.logData(url, 'Find one restaurant detail', res);
        return res;
    }

    public async findRestIdUsingNameId(url: string, nameid: string): Promise<any> {
        const res = await  this.restaurantDetailsRepository.collection.findOne({ nameid: `${nameid}` }, {projection: {restaurant_id: 1, _id: 0}});
        this.logData(url, 'Find restaurant_id by nameid', res);
        return res;
    }

    public logData(_url: string, desc: string, res: any): any {
        try {
            const logData = {
                type: 'Response',
                url: _url,
                description: desc,
                response: res,
            };
            this.log.info(JSON.stringify(logData));

        } catch (error) {
            this.log.error(error);
        }
    }

}
