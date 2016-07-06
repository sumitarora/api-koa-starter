/**
 * This module contains HTTP handlers for health checks and other
 * infrastructure integration hooks.
 */

async function shallowHealthCheck(ctx) {
  ctx.body = {
    ok: 'OK',
  };
}

module.exports = {
  shallowHealthCheck,
};
