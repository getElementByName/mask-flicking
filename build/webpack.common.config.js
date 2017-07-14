const merge = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpackTsConfig = require("./addon/webpack.ts.config");
const StyleConfig = require("./addon/webpack.style.config");

module.exports = merge({
    entry: {
      "js/demo": ["./src/assets/main.scss", "./src/demo.ts"],
      "js/bundle": "./src/index.ts"
    },
    output: {
      filename: "[name].js",
      path: path.resolve(process.cwd(), "dist")
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/assets/index.html",
        chunks: ['js/demo']
      })
    ]
  }, webpackTsConfig, StyleConfig);
