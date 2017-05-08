/**
 * webpack.dll.js
 *
 * Webpack’s DLLPlugin to build all dependencies into a single file.
 *
 * @date 27/10/2016
 * @author Mosufy <mosufy@gmail.com>
 * @copyright Copyright (c) Mosufy
 *
 * To generate new dll file, simply run this command
 *
 * ```
 * yarn run build-dll     # bundle vendor
 * ```
 */

const path = require("path");
const webpack = require("webpack");
const AssetsPlugin = require('assets-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    vendor: ['./vendors.js']
  },
  output: {
    path: path.resolve(__dirname, './public/js/dll'),
    filename: "dll.[name]-[hash].js",
    library: "[name]"
  },
  plugins: [
    new WebpackCleanupPlugin({
      exclude: ['webpack.dll.manifest.json']
    }),
    new webpack.DllPlugin({
      path: path.resolve(__dirname, './[name]-manifest.json'),
      name: "[name]"
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new AssetsPlugin({
      filename: 'webpack.dll.manifest.json',
      path: path.resolve(__dirname, './public/js/dll')
    })
  ]
};