import { Service } from 'typedi';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { RestaurantDetailsRepository } from '../repositories/RestaurantDetailsRepository';

@Service()
export class RestaurantDetailsService {

    constructor(
        private restaurantDetailsRepository: RestaurantDetailsRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public find(): Promise<any> {
        this.log.info('Find all restaurant details');
        return this.restaurantDetailsRepository.collection.find().toArray();
    }

    public findOne(id: string): Promise<any> {
        this.log.info('Find one restaurant detail');
        return this.restaurantDetailsRepository.collection.findOne({ id: `${id}` });
    }

    public findRestIdUsingNameId(nameid: string): Promise<any> {
        this.log.info('Find restaurant_id by nameid');
        return this.restaurantDetailsRepository.collection.findOne({ nameid: `${nameid}` }, {projection: {restaurant_id: 1, _id: 0}});
    }

}
