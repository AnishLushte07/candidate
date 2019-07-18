const express = require('express');
const http = require('http');

const config = require('./config/environment');
const sqldb = require('./conn/sqldb');

const app = express();
const server = http.createServer(app);

require('./config/express')(app);
require('./routes')(app);

const logger = require('./components/logger');

// Start src
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, () => {
    logger.log('Server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

sqldb.sequelize
  .authenticate()
  .then(startServer)
  .catch((err) => {
    logger.error('Server failed to start due to error: %s', err);
  });

// Expose app
module.exports = app;
