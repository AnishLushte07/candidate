
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const _ = require('lodash');

const root = path.normalize(`${__dirname}/../../..`);
if (!fs.existsSync(path.join(root, '.env'))) {
  fs.writeFileSync(path.join(root, '.env'), fs.readFileSync(path.join(root, '.env.sample')));
}

const env = dotenv.config({ path: path.join(root, '.env') }).parsed;

const all = {
  env: env.NODE_ENV,

  // Root path of src
  root,

  // Browser-sync port
  browserSyncPort: process.env.BROWSER_SYNC_PORT || 3000,

  // Server port
  port: process.env.PORT || 9000,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  all,
  env,);
