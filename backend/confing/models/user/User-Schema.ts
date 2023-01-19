import * as mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true
    },
  password: {
    type: String,
    required: true
    },
  wallets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Wallet' }]
});