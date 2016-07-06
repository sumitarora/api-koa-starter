const ENV_WHITELIST = ['local', 'testing', 'staging'];
const projectEnv = process.env.PROJECT_ENV;

if (!projectEnv) {
  throw new Error('Missing PROJECT_ENV');
}

if (ENV_WHITELIST.indexOf(projectEnv) === -1) {
  throw new Error(`Invalid PROJECT_ENV: ${projectEnv}`);
}

module.exports = require(`../env/${projectEnv}`);
