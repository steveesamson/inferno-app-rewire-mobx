const {injectBabelPlugin} = require('inferno-app-rewired');

function rewireMobX(config, env) {
  return injectBabelPlugin('transform-decorators-legacy', config);
}

module.exports = rewireMobX;
