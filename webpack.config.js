const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode
  // mode: 'development',
  // entry
  entry: {
    app: './src/js/main.js',
    sortable: './src/js/utils/sortable.js'
  },
  // output
  output: {
    filename: '[name].bundle.js', // string (default)
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  // module
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: 'body',
      minify: true,
      hash: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'views/users.view.html',
      template: 'src/views/users.view.html',
      inject: 'body',
      minify: true,
      hash: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'views/motive.view.html',
      template: 'src/views/motive.view.html',
      inject: 'body',
      minify: true,
      hash: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'views/displaced.view.html',
      template: 'src/views/displaced.view.html',
      inject: 'body',
      minify: true,
      hash: true,
    })
  ]
};
