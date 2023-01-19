import { Connection } from 'mongoose';
import { WalletSchema } from './Wallet-Schema';

export const userProviders = [
  {
    provide: 'WALLET_MODEL',
    useFactory: (connection: Connection) => connection.model('Wallet', WalletSchema),
    inject: ['DATABASE_CONNECTION'],
  },
]