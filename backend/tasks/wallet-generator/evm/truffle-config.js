import chains from './chains/get';

export const contracts_build_directory = `contracts/abis`;
export const networks = chains;
export const compilers = {
  solc: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
