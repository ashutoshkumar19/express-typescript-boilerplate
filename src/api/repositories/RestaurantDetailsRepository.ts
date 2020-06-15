import mongoose from 'mongoose';

export class RestaurantDetailsRepository  {
    public collection = mongoose.connection.collection('restaurant_details');
}
