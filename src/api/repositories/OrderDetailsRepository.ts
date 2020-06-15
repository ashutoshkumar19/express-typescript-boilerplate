import mongoose from 'mongoose';

export class OrderDetailsRepository  {
    public collection = mongoose.connection.collection('order_details');
}
