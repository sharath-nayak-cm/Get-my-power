import mongoose, { Schema, Document } from 'mongoose';

export interface IRestaurant extends Document {
    id?:number,
    name:string,
    description?:string,
    location : string,
    phone: number,
    photos?: string,

}

const restaurantSchema: Schema = new Schema ({
    id: { type: Number, required: false } ,
    name: { type: String, required: true },
    description: { type: String, required: false },
    location : { type: String, required: true },
    phone: { type: Number, required: false } ,
    photos: String,
})

export default mongoose.model<IRestaurant>('Restaurant', restaurantSchema);