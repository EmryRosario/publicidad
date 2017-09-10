const path = require('path')
const webpack = require('webpack')


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../app'),
    filename: 'index.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  },
  plugins: [
  ]
}
