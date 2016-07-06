const winston = require('winston');
const R = require('ramda');

/**
 * Middleware that checks for required parameters.
 * @argument { Array<string> } paramType - Where the parameters live (session,
 *  [request, body], etc.).
 * @argument { Array<string> } params - the names of the params to check.
 */
const verify = (paramType, params) => async (ctx, next) => {
  const paramHolder = R.path(paramType, ctx);

  if (!paramHolder) {
    winston.warn('Invalid paramType:', paramType);
    ctx.throw(400, 'Bad request');
  }

  params.forEach(param => {
    if (!paramHolder[param]) {
      ctx.throw(400, `${param} is required.`);
    }
  });

  await next();
};

module.exports = verify;
