import * as mongoose from 'mongoose';


export const WalletContractSchema = new mongoose.Schema({
    address: {
        type: String,
        unique: true,
        required: true
    },
    reserved: {
        type: Boolean,
        default: false
    },
    chainId: Number
});