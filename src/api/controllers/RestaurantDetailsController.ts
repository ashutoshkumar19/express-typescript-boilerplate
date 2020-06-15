import { Get, JsonController, OnUndefined, Param } from 'routing-controllers';

import { RestaurantDetailsNotFoundError } from '../errors/RestaurantDetailsNotFoundError';
import { RestaurantDetailsService } from '../services/RestaurantDetailsService';

@JsonController('/restaurant-details')
export class RestaurantDetailsController {

    constructor(
        private restaurantDetailsService: RestaurantDetailsService
    ) { }

    @Get()
    public find(): Promise<any> {
        return this.restaurantDetailsService.find();
    }

    @Get('/:id')
    @OnUndefined(RestaurantDetailsNotFoundError)
    public findOne(@Param('id') id: string): Promise<any> {
        return this.restaurantDetailsService.findOne(id);
    }

    @Get('/nameid/:nameid')
    @OnUndefined(RestaurantDetailsNotFoundError)
    public findRestIdUsingNameId(@Param('nameid') nameid: string): Promise<any> {
        return this.restaurantDetailsService.findRestIdUsingNameId(nameid);
    }

}
