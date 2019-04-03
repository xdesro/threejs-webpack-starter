import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}