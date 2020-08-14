const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');

// import base config
const webpackConfigBase = require('./webpack.config.base.js');

module.exports = merge(webpackConfigBase, {
  entry: {
    app: ['react-hot-loader/patch', './app.js'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
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
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
