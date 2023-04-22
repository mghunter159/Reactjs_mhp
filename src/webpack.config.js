const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin ({
      title: 'webpack Boilerplate',
      template:path.resolve(__dirname, '/src/template.html'),
      filename: 'index.html' 
    }),
    new CleanWebpackPlugin(),
  ]
};