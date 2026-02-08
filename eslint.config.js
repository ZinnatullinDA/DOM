const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
  },

  {
    files: ['*.js', '*.cjs', '*.mjs', 'webpack.*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: globals.node,
    },
  },

  {
    rules: {
      'no-console': 'off',
    },
  },

  {
    files: ['**/__tests__/**/*.js'],
    languageOptions: {
      globals: globals.jest,
    },
  },
];
