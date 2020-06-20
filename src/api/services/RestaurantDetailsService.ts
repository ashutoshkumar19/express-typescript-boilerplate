import { Service } from 'typedi';

import { ResponseLogMiddleware } from '../middlewares/ResponseLogMiddleware';
import { RestaurantDetailsRepository } from '../repositories/RestaurantDetailsRepository';

@Service()
export class RestaurantDetailsService {

    constructor(
        private restaurantDetailsRepository: RestaurantDetailsRepository,
        private log: ResponseLogMiddleware
    ) { }

    public async find(url: string): Promise<any> {
        const res = await this.restaurantDetailsRepository.collection.find().toArray();
        this.log.logResponse(url, 'Find all restaurant details', res);
        return res;
    }

    public async findOne(url: string, id: string): Promise<any> {
        const res = await this.restaurantDetailsRepository.collection.findOne({ id: `${id}` });
        this.log.logResponse(url, 'Find one restaurant detail', res);
        return res;
    }

    public async findRestIdUsingNameId(url: string, nameid: string): Promise<any> {
        const res = await  this.restaurantDetailsRepository.collection.findOne({ nameid: `${nameid}` }, {projection: {id: 1, _id: 0}});
        this.log.logResponse(url, 'Find restaurant id by nameid', res);
        return res;
    }

}
