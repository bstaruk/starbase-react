const path = require('path');
const { merge } = require('webpack-merge');

// import base config
const webpackConfigBase = require('./webpack.config.base.js');

module.exports = merge(webpackConfigBase, {
  mode: 'development',
  devServer: {
    contentBase: path.join(process.cwd(), 'dist'),
    historyApiFallback: true,
    port: 3000,
    stats: {
      children: false,
    },
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
  },
});
