/*
* Purpose: Use to logging in Sentry, File and Console
* Usage:
* const logger = require('./logger')
export async function test(id) {
  try {
    // your code here
    const testxyz = await test1();
  } catch (e) {
    logger.error(e);
  }
}
* */


const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const { NODE_ENV, root } = require('../../config/environment');

const logger = new winston.Logger({
  transports: [
    new DailyRotateFile({
      datePattern: 'YYYY-MM-DD-HH',
      filename: `${root}/logs/error.%DATE%.log`,
    }),
    new (winston.transports.Console)({
      name: 'console',
      level: 'debug',
      silent: NODE_ENV === 'production',
    }),
  ],
});

module.exports = logger;
