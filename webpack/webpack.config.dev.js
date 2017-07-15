const webpackMerge = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const paths = {
  'src': path.resolve(__dirname, '../src')
};

module.exports = function () {
  return webpackMerge(webpackConfigBase(), {
    output: {
      publicPath: '/'
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
                  sourceMap: 'inline',
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
                      require('postcss-nested'),
                      require('postcss-remove-root'),
                      require('css-mqpacker')({
                        sort: true
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
    devServer: {
      historyApiFallback: true,
      contentBase: paths.src,
      port: 8080,
      watchOptions: {
        poll: 1000
      },
      stats: {
        children: false
      }
    },
    plugins: [
      new ExtractTextPlugin('[name].bundle.css')
    ]
  })
};
