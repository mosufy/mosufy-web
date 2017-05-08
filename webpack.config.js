/**
 * webpack.config.js
 *
 * @date 14/10/2016
 * @author Mosufy <mosufy@gmail.com>
 * @copyright Copyright (c) Mosufy
 *
 * To build webpack bundle, simply run this command
 *
 * ```
 * yarn run build-dev     # bundle dev
 * yarn run build-prod    # bundle production
 * yarn run build         # bundle for all env
 * ```
 */

const path = require("path");
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const Dotenv = require('dotenv-webpack');
const Unminified = require('unminified-webpack-plugin');

module.exports = function(env) {
  return {
    cache: true,
    context: path.resolve(__dirname),
    entry: {
      bundle: './resources/react/index.js'
    },
    devtool: 'cheap-module-source-map',
    output: {
      filename: '[name]-[hash].js',
      path: path.resolve(__dirname, './public/js/bundle/' + env.bundleEnv),
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
      new Dotenv({
        path: './.env.build', // if not simply .env
      }),
      env.bundleEnv !== 'dev' ? new webpack.optimize.UglifyJsPlugin() : new Unminified(),
      new webpack.DllReferencePlugin({
        context: path.resolve(__dirname),
        manifest: require('./vendor-manifest.json')
      }),
      new AssetsPlugin({
        filename: 'webpack.manifest.json',
        path: path.resolve(__dirname, './public/js/bundle/' + env.bundleEnv)
      })
    ]
  }
};