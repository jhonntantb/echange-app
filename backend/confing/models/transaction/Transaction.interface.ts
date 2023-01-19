import { Document } from 'mongoose';

export interface Transaction extends Document {
  readonly nature: number;
  readonly txHash: string;
  readonly amount: number;
  readonly created_at: Date,
  readonly to: string;
  readonly confirmations: number;
  readonly status: number;
}