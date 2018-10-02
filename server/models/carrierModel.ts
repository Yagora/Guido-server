import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CarrierSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});