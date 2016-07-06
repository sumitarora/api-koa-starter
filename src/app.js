const Koa = require('koa');
const helmet = require('koa-helmet');
const winston = require('winston');

const k = require('./project-env');
const api = require('./api');

const PORT = k.PORT || 3001;
const app = new Koa();

app.use(helmet());

if (k.REQUEST_LOGS) {
  app.use(require('koa-morgan')('combined'));
}

app
  .use(api.routes())
  .use(api.allowedMethods());

if (require.main === module) {
  winston.info(`Starting server on port ${PORT}...`);
  app.listen(PORT);
}

module.exports = app;
