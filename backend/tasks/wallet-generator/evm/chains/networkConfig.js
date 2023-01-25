import appRoot from 'app-root-path';
require('dotenv').config({ path: `${appRoot}/config/.env` });

import HDWalletProvider from '@truffle/hdwallet-provider';

export default (walletAddress, privateKeys, network_id, url) => {
  return {
    network_id,
    provider: () => new HDWalletProvider(privateKeys, url),
    from: walletAddress,
    gas: 5000000,
    confirmations: 4,
    timeoutBlocks: 10000,
  };
};
