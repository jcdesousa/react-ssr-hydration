const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const commonConfig = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
};

const serverConfig = {
  ...commonConfig,
  entry: './src/server.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/',
  },
  externals: nodeExternals(),
};

const clientConfig = {
  ...commonConfig,
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.js',
    publicPath: '/',
  },
};

module.exports = [clientConfig, serverConfig];
