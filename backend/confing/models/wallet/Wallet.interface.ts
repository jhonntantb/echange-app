import { Document } from 'mongoose';

export interface Wallet extends Document {
  readonly balance: number;
  readonly address: string;
  readonly coin: string;
  readonly chainId: number,
  readonly  transaction: string[];
}