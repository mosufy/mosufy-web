/**
 * webpack.config.js
 *
 * @date 14/10/2016
 * @author Mosufy <mosufy@gmail.com>
 * @copyright Copyright (c) Mosufy
 *
 * To build webpack bundle, simply run this command
 * $ node_modules/.bin/webpack --config=webpack/webpack.config.js
 */

const path = require("path");
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
  cache: true,
  context: path.resolve(__dirname, '../resources/react'),
  entry: {
    bundle: './index.js'
  },
  devtool: 'eval',
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve(__dirname, '../public/js/bundle/dev'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-0', 'react']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new WebpackCleanupPlugin({
      exclude: ['webpack.manifest.json']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'API_HOST': JSON.stringify('https://lumen-react.dev/v1'),
        'API_CLIENT_ID': JSON.stringify('6fC2745co07D4yW7X9saRHpJcE0sm0MT'),
        'API_CLIENT_SECRET': JSON.stringify('KLqMw5D7g1c6KX23I72hx5ri9d16GJDW')
      }
    }),
    new webpack.DllReferencePlugin({
      manifest: require('../public/js/dll/vendor-manifest.json')
    }),
    new AssetsPlugin({
      filename: 'webpack.manifest.json',
      path: path.resolve(__dirname, '../public/js/bundle/dev')
    })
  ]
};