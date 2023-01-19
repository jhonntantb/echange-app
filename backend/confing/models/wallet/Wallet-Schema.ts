import * as mongoose from 'mongoose';


export const WalletSchema = new mongoose.Schema({
    balance: {
        type: Number,
        required: false,
        default: 0
    },
    address: {
        type: String,
        required: true,
        index: true
    },
    coin: String,
    chainId: Number,
    transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }]
});