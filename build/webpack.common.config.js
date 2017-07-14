var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
      bundle: "./src/index.ts"
    },
    output: {
      filename: "[name].js",
      path: path.resolve(process.cwd(), "dist")
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/assets/index.html"
      })
    ]
  };
