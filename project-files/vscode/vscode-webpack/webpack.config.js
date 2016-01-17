var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  entry: {
    'vendor': './vendor',
    'app': './main'
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  resolve: {
    // ensure loader extensions match
    extensions: ['', '.ts', '.js', '.json', '.css', '.html']
  },
  module: {
    noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        query: {
          'ignoreDiagnostics': [
            2403, // 2403 -> Subsequent variable declarations
            2300, // 2300 -> Duplicate identifier
            2374, // 2374 -> Duplicate number index signature
            2375  // 2375 -> Duplicate string index signature
          ]
        },
        exclude: [/\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
      },
    ]
  },
  plugins: [
    new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js', minChunks: Infinity }),
    new CommonsChunkPlugin({ name: 'common', filename: 'common.js', minChunks: 2, chunks: ['app', 'vendor'] })
    // include uglify in production
  ],
};