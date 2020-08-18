const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'redux-saga', 'import'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
  },
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    React: true,
    PropTypes: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './internals/webpack/webpack.config.prod.js',
      },
    },
  },
};
