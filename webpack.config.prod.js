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
        {from: 'src/text/README.txt', to: '../README.txt'}
      ]),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new htmlWebpackPlugin({
        title: 'PPC Report',
        filename: '../PPC_REPORT_DOUBLECLICK.html',
        template: 'src/pug/index.pug'
      }),
    ],
    entry: {
      bundle: __dirname + '/src/js/init.jsx'
    },
    output: {
        path: __dirname + '/app/assets',
        filename: 'bundle.[hash].js',
        publicPath: 'assets/'
    },
    devtool: 'cheap-module-source-map',
};
