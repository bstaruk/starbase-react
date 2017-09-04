const path = require('path');

module.exports = function pathsHelper(a) {
  const paths = {
    'app': path.resolve(__dirname, '../../src/app'),
    'base': path.resolve(__dirname, '../../'),
    'components': path.resolve(__dirname, '../../src/components'),
    'dist': path.resolve(__dirname, '../../dist'),
    'src': path.resolve(__dirname, '../../src'),
    'variables': path.resolve(__dirname, '../../src/variables/variables.css')
  };
  return paths[a];
};
