var webpack = require("webpack");
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
};
