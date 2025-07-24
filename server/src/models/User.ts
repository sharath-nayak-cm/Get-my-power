import mongoose, { Schema, Document } from 'mongoose';
const bcrypt = require('bcryptjs');

export interface Iuser extends Document {
    username : string,
    password: string
    email?: string, 
    createdAt: Date,
    updatedAt: Date,
    matchPassword: (enteredPassword:string) => Promise<boolean>
}

const UserSchema: Schema = new Schema<Iuser> ({
    username: { type: String,required: true,unique: true },
    password : {type:String, required: true},
    email: { type: String,  unique: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})


// Hash password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


// Match password
UserSchema.methods.matchPassword = async function (enteredPassword:string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model<Iuser>('User', UserSchema);