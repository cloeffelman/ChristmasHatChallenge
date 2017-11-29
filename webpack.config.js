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
    new copyWebpackPlugin([{from: 'src/client/assets', to: 'assets'}]),
    new htmlWebpackPlugin({
      title: 'Christmas Hat Challenge',
      filename: 'index.html',
      template: 'src/client/index.pug'
    }),
  ],
  output: {
      path:  path.resolve(__dirname, 'build'),
      filename: 'bundle.[hash].js',
      publicPath: '/'
  }
}

if(PROD){
  config.entry = [path.resolve(__dirname, 'src/client/init.jsx')]
  config.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }))
  config.plugins.push(new webpack.optimize.UglifyJsPlugin())
}
else{
  config.entry = [path.resolve(__dirname, 'src/client/init.jsx'), 'webpack-dev-server/client?http://localhost:3000']
  config.devtool = 'eval-source-map'
  config.devServer = {
    port: 3000,
    contentBase:  path.resolve(__dirname, 'build')
  }
}

module.exports = config