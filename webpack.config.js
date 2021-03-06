var path = require('path');
const webpack = require('webpack');

var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: {
    index: `${SRC_DIR}/index.jsx`,
    main: `${SRC_DIR}/main.jsx`
  },
  output: {
    filename: '[name].bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      SERVER_URL: JSON.stringify(process.env.SERVER_URL)
    })
  ]
};
