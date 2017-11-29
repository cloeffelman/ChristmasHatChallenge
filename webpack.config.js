const webpack = require('webpack'),
      copyWebpackPlugin = require('copy-webpack-plugin'),
      htmlWebpackPlugin = require('html-webpack-plugin'),
      path = require('path')

const PROD = process.env.NODE_ENV === 'production'

module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader?cacheDirectory',
          exclude: [/node_modules/]
        },
        {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader'],
          exclude: [/node_modules/]
        },
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          include: /pug/,
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
      new copyWebpackPlugin([{from: 'src/assets', to: 'assets'}]),
      new htmlWebpackPlugin({
        title: 'Christmas Hat Challenge',
        filename: 'index.html',
        template: 'src/index.pug'
      }),
    ],
    entry: {
      bundle: [path.resolve(__dirname, 'src/init.jsx'), 'webpack-dev-server/client?http://localhost:3000']
    },
    output: {
        path:  path.resolve(__dirname, 'app'),
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    devtool: PROD ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
    devServer: {
      port: 3000,
      contentBase:  path.resolve(__dirname, 'app')
    }
}
