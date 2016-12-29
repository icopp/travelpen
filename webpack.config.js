var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './index.ts',

  output: {
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader'
      }
    ]
  },

  devtool: '#source-map',

  target: 'node'
}
