import mongoose, { Document, Schema } from 'mongoose';

export interface IOrderDetails extends Document {
    order_id: string;
    order_no: number;
    user_id: string;
    restaurant_id: string;
    order_status: number;
    bill_id: string;
    created_at: Date;
    created_mongodate: Date;
    date: Date;
    confirmed_at: number;
    estimated_time: number;
    completed_at: number;
    table_id: string;
    table_no: number;
    floor_id: string;
    floor_name: string;
    items: [
        {
            itr: number;
            item_id: string;
            item_name: string;
            item_quantity: number;
            item_price: number;
            original_price: number;
            discount_per: number;
            reward_id: string;
            created_at: Date;
            confirmed_at: Date;
            completed_at: Date;
            kitchen_counter_id: string;
            kitchen_picked_at: Date;
            kitchen_picked_by: string;
            kitchen_time_to_complete: number;
            item_status: number;
            order_item_id: string;
            declined_at: Date;
            decline_reason: [
                {
                    decline_item_code: number;
                    decline_reason: string;
                },
            ],
        },
    ];
    special_notes: [{string}];
}

const OrderDetailsSchema: Schema = new Schema({
// const OrderDetailsSchema = new Schema({
    order_id: {
        type: String,
    },
    order_no: {
        type: Number,
    },
    user_id: {
        type: String,
    },
    restaurant_id: {
        type: String,
    },
    order_status: {
        type: Number,
    },
    bill_id: {
        type: String,
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
    items: [{
        itr: {
            type: Number,
        },
        item_id: {
            type: String,
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
    }],
    special_notes: [{
        type: String,
    }],
});

// Export the model and return your IOrderDetails interface
export default mongoose.model<IOrderDetails>('order_details', OrderDetailsSchema);

// const OrderDetails = mongoose.model('order_details', OrderDetailsSchema);
// export default OrderDetails;
