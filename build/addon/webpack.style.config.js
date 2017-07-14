const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin("css/main.css");

module.exports = {
  module: {
    rules: [
     {
        test: /\.scss$/,
        use:  extractSass.extract([
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              minimize: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ])
      }
    ]
  },
  plugins: [extractSass]
};
