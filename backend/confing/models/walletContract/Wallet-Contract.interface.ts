import { Document } from 'mongoose';

export interface WalletContract extends Document {
  readonly address: string;
  readonly reserved: boolean;
  readonly chainId: number,
}