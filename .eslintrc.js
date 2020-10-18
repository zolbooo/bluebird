const config = require('@nicepack/eslint-ts/react/next');

config.rules = {
  ...config.rules,
  '@typescript-eslint/explicit-module-boundary-types': 'off',
};

module.exports = config;
