var webpack = require('webpack');
var copyWebpackPlugin = require('copy-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');

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
          test: /\.css$/,
          loader: 'css-loader',
          exclude: [/node_modules/, /flexboxgrid/]
        },
        {
          test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
          loader: "file-loader",
          include:[/roboto-fontface/, /img/]
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules',
          include: /flexboxgrid/,
        },
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          include: /pug/,
        },
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
      new copyWebpackPlugin([
        {from: 'src/js/data.js', to: 'assets/data.js'}
      ]),
      new htmlWebpackPlugin({
        title: 'PPC Report',
        filename: 'index.html',
        template: 'src/pug/index.pug'
      }),
    ],
    entry: {
      bundle: [ __dirname + '/src/js/init.jsx', 'webpack-dev-server/client?http://localhost:3000']
    },
    output: {
        path:  __dirname + '/app',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      port: 3000,
      contentBase:  __dirname + '/app'
    },
};
