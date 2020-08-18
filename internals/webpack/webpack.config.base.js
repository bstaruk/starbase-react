const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.resolve(process.cwd(), 'src'),
  entry: {
    app: [path.join(process.cwd(), 'src/app.js')],
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
  },
  resolve: {
    modules: ['node_modules', path.resolve(process.cwd(), 'src')],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name].[md5:hash:hex:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[md5:hash:hex:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: 'images/favicon.png',
    }),
  ],
};
