import { Get, JsonController, OnUndefined, Param } from 'routing-controllers';

import { RestaurantDetailsNotFoundError } from '../errors/RestaurantDetailsNotFoundError';
import { RestaurantDetailsService } from '../services/RestaurantDetailsService';

@JsonController('/restaurant-details')
export class RestaurantDetailsController {

    constructor(
        private restaurantDetailsService: RestaurantDetailsService,
        private url: string = '/api/restaurant-details'
    ) { }

    @Get()
    public find(): Promise<any> {
        return this.restaurantDetailsService.find(this.url);
    }

    @Get('/:id')
    @OnUndefined(RestaurantDetailsNotFoundError)
    public findOne(@Param('id') id: string): Promise<any> {
        const url = this.url + '/' + id;
        return this.restaurantDetailsService.findOne(url, id);
    }

    @Get('/nameid/:nameid')
    @OnUndefined(RestaurantDetailsNotFoundError)
    public findRestIdUsingNameId(@Param('nameid') nameid: string): Promise<any> {
        const url = this.url + '/nameid/' + nameid;
        return this.restaurantDetailsService.findRestIdUsingNameId(url, nameid);
    }

}
