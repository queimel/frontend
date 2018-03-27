const path = require('path');
var HTMLWebpackPlugin = require("html-webpack-plugin");
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve("src/index.html"),
    }),
    new LiveReloadPlugin({})
  ],
  module:{
    rules:[
      {
        test:/\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
     ]
  }
};