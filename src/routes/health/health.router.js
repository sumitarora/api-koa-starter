const router = require('koa-router')();

const healthController = require('./health.controller');

router.get('/', healthController.shallowHealthCheck);

module.exports = router;
