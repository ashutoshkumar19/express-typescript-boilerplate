import mongoose, { Document, Schema } from 'mongoose';

export interface IOrderDetails extends Document {
  email: string;
  firstName: string;
  lastName: string;
}

const OrderDetails: Schema = new Schema({
    order_id: {
        type: Schema.Types.ObjectId,
    },
    order_no: {
        type: Number,
    },
    user_id: {
        type: Schema.Types.ObjectId,
    },
    restaurant_id: {
        type: Schema.Types.ObjectId,
    },
    order_status: {
        type: Number,
    },
    bill_id: {
        type: Schema.Types.ObjectId,
    },
    created_at: {
        type: Date,
    },
    created_mongodate: {
        type: Date,
    },
    date: {
        type: Date,
    },
    confirmed_at: {
        type: Number,
    },
    estimated_time: {
        type: Number,
    },
    completed_at: {
        type: Number,
    },
    table_id: {
        type: String,
    },
    table_no: {
        type: Number,
    },
    floor_id: {
        type: String,
    },
    floor_name: {
        type: String,
    },
    items: [
        {

            itr: {
                type: Number,
            },

            item_id: {
                type: Schema.Types.ObjectId,
            },

            item_name: {
                type: String,
            },

            item_quantity: {
                type: Number,
            },

            item_price: {
                type: Number,
            },

            original_price: {
                type: Number,
            },
            discount_per: {
                type: Number,
            },
            reward_id: {
                type: String,
            },
            created_at: {
                type: Date,
            },
            confirmed_at: {
                type: Date,
            },
            completed_at: {
                type: Date,
            },
            kitchen_counter_id: {
                type: String,
            },
            kitchen_picked_at: {
                type: Date,
            },
            kitchen_picked_by: {
                type: String,
            },
            kitchen_time_to_complete: {
                type: Number,
            },
            item_status: {
                type: Number,
            },
            order_item_id: {
                type: String,
            },
            declined_at: {
                type: Date,
            },
            decline_reason: [
                {
                    decline_item_code: {
                        type: Number,
                    },
                    decline_reason: {
                        type: String,
                    },
                },
            ],
        },
    ],
    special_notes: [
        {
            type: String,
        },
    ],
});

// Export the model and return your IUser interface
export default mongoose.model<IOrderDetails>('OrderDetails', OrderDetails);
