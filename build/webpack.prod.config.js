var webpack = require("webpack");
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  devtool: "source-map",
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
};
