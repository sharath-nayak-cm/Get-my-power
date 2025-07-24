import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
    userId: string;
    restaurant: mongoose.Types.ObjectId
}

const bookingSchema: Schema = new Schema({
    userId: { type: String, required: true },
    restaurant : {type:Schema.Types.ObjectId, ref: 'Restaurant',required:true}

})

export default mongoose.model<IBooking>('Booking',bookingSchema)