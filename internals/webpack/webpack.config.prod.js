const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const { merge } = require('webpack-merge');

// import base config
const webpackConfigBase = require('./webpack.config.base.js');

module.exports = merge(webpackConfigBase, {
  mode: 'production',
  output: {
    filename: '[name].[hash:8].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new OfflinePlugin({
      AppCache: false,
    }),
  ],
});
