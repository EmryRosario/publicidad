const path = require('path')
const fs = require('fs')

module.exports = {
  entry: path.resolve(__dirname, '../server-src'),
  target: 'node',
  output: {
    path: path.resolve(__dirname, '../server/'),
    filename: 'index.js'
  },
  module: {
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    { test: /\.node$/, use: 'node-loader' }
  ]
}
}
