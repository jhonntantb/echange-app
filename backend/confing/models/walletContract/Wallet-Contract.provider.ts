import { Connection } from 'mongoose';
import { WalletContractSchema } from './Wallet-Contract-Schema';

export const userProviders = [
  {
    provide: 'WALLETCONTRACT_MODEL',
    useFactory: (connection: Connection) => connection.model('WalletContract', WalletContractSchema),
    inject: ['DATABASE_CONNECTION'],
  },
]