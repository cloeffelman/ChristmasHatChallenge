const webpack = require('webpack'),
      copyWebpackPlugin = require('copy-webpack-plugin'),
      htmlWebpackPlugin = require('html-webpack-plugin'),
      path = require('path')

const PROD = process.env.NODE_ENV === 'production'

const config = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader?cacheDirectory'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: [/node_modules/]
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        exclude: [/node_modules/]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new copyWebpackPlugin([{from: 'src/client/assets', to: 'assets'}]),
    new htmlWebpackPlugin({
      title: 'Christmas Hat Challenge',
      filename: 'index.html',
      template: 'src/client/index.pug'
    }),
  ],
  entry: {
    bundle: [path.resolve(__dirname, 'src/client/init.jsx'), 'webpack-dev-server/client?http://localhost:3000']
  },
  output: {
      path:  path.resolve(__dirname, 'build'),
      filename: 'bundle.[hash].js',
      publicPath: '/'
  },
  devtool: PROD ? 'source-map' : 'eval-source-map',
  devServer: {
    port: 3000,
    contentBase:  path.resolve(__dirname, 'build')
  }
}

if(PROD){
  config.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }))
}

module.exports = config