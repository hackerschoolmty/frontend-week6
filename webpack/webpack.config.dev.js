var path = require('path')
var webpack = require('webpack')

const ABSOLUTE_BASE = path.join(__dirname, '..');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
  ],
  output: {
    path: path.join(ABSOLUTE_BASE, 'public/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
      },
      {
        test:   /\.scss$/,
        loader: 'style!css!sass',
      },
      {
        test:   /\.(png|gif|jpe?g|svg|woff|woff2|ttf|eot)$/i,
        loader: 'url?limit=10000',
      }
    ]
  }
}
