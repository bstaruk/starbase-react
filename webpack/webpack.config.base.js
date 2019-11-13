const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: [
      'react-hot-loader/patch',
      './app.jsx'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '../src/components'),
      '@lib': path.resolve(__dirname, '../src/lib')
    },
    extensions: ['.js', '.jsx', '.json', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'images/[name].[md5:hash:hex:8].[ext]'
          }
        }]
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'images/[name].[md5:hash:hex:8].[ext]'
          }
        }]
      },
      {
        test: /\.(mp4|ogg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[md5:hash:hex:8].[ext]'
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[md5:hash:hex:8].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/templates/index.html'),
      filename: 'index.html',
      favicon: path.resolve(__dirname, '../src/templates/images/favicon.png')
    })
  ]
};
