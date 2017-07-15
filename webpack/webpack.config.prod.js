const webpackMerge = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const paths = {
  'base': path.resolve(__dirname, '../')
};

module.exports = function() {
  return webpackMerge(webpackConfigBase(), {
    output: {
      publicPath: './'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  plugins: function () {
                    return [
                      require('postcss-import'),
                      require('stylelint')(),
                      require('postcss-reporter')(),
                      require('postcss-cssnext')({
                        features: {
                          autoprefixer: {
                            grid: false
                          }
                        }
                      }),
                      require('postcss-remove-root'),
                      require('css-mqpacker')({
                        sort: true
                      }),
                      require('cssnano')({
                        autoprefixer: false,
                        safe: true
                      })
                    ];
                  }
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].bundle.css'),
      new CleanWebpackPlugin(['dist'], { root: paths.base })
    ]
  })
};
