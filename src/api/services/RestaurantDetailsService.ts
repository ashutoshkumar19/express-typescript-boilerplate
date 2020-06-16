import { Service } from 'typedi';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { RestaurantDetailsRepository } from '../repositories/RestaurantDetailsRepository';

@Service()
export class RestaurantDetailsService {

    constructor(
        private restaurantDetailsRepository: RestaurantDetailsRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public find(url: string): Promise<any> {
        const res =  this.restaurantDetailsRepository.collection.find().toArray();
        this.logData(url, 'Find all restaurant details');
        return res;
    }

    public findOne(url: string, id: string): Promise<any> {
        const res =  this.restaurantDetailsRepository.collection.findOne({ id: `${id}` });
        this.logData(url, 'Find one restaurant detail');
        return res;
    }

    public findRestIdUsingNameId(url: string, nameid: string): Promise<any> {
        const res =  this.restaurantDetailsRepository.collection.findOne({ nameid: `${nameid}` }, {projection: {restaurant_id: 1, _id: 0}});
        this.logData(url, 'Find restaurant_id by nameid');
        return res;
    }

    public logData(_url: string, _description: string): any {
        try {
            const logData = {
                type: 'Response',
                url: _url,
                description: _description,
            };
            this.log.info(JSON.stringify(logData));

        } catch (error) {
            this.log.error(error);
        }
    }

}
