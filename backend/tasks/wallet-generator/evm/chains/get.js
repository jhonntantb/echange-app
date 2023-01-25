import { readdirSync } from 'fs';
import appRoot from 'app-root-path';
import Config from './networkconfig';

const buildNetworks = () => {
  const networks = {};
  const __dir = `${appRoot}/config/chains`;
  const files = readdirSync(__dir);

  files.forEach((file) => {
    const info = require(`${__dir}/${file}`);
    const network_id = require('path').parse(file).name;

    networks[info.name] = Config(
      info.g_address,
      info.g_address_pk,
      network_id,
      info.rpc
    );
  });

  return networks;
};

export default buildNetworks();
