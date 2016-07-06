const winston = require('winston');
const k = require('../project-env');

const UNHANDLED_ERROR_CODE = 500;

const errorResponder = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    // Send the client an appropriate error response and log it.
    ctx.status = err.status || UNHANDLED_ERROR_CODE;
    ctx.body = err.message || '';

    if (k.LOG_ERRORS) {
      winston.error(`${ctx.status} response: ${ctx.body}`);

      if (ctx.status === UNHANDLED_ERROR_CODE) {
        // Log a detailed error dump and stack trace internally.
        const errStr = JSON.stringify(err, null, 2);
        winston.error(`Trace: ${err.stack}\nData: ${errStr}`);
      }
    }
  }
};

module.exports = errorResponder;
