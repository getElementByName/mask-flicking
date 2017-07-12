var merge = require("webpack-merge");

var webpackCommonConfig = require("./webpack.common.config");
var webpackDevConfig = require("./webpack.dev.config");
var webpackProdConfig = require("./webpack.prod.config");

module.exports = function(env) {
  var isDevMode = env && env.dev;

  return merge(webpackCommonConfig, isDevMode ? webpackDevConfig : webpackProdConfig);
};
