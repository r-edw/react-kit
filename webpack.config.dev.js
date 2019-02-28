const baseConfig = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, baseConfig, {
  devtool: 'cheap-eval-source-map', 
  devServer: {
    contentBase: './dist'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './DEV_ONLY/index.html',
    })
  ]
});