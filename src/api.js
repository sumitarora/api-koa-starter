const api = require('koa-router')();

const errorResponder = require('./middleware/error-responder');
const healthRouter = require('./routes/health/health.router');

api.use(errorResponder);

// Public endpoints.
api.use('/', healthRouter.routes());

module.exports = api;
