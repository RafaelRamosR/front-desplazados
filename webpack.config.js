const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode
  mode: 'production', // 'production' | 'development' | 'none'
  // entry point
  // string | object | array
  entry: {
    app: './src/js/main',
    jquery: './src/js/funciones',
  },
  // output point
  output: {
    path: path.resolve(__dirname, 'dist'), // string (default)
    filename: '[name].bundle.js', // string (default)
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true,
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: 'test.html',
      template: 'src/index.html',
      hash: true,
      inject: 'body',
    }),
  ],
};
