const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: '[name].js'
  },
  module: {
    rules: [
      // Font
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: "[name].[ext]",
                outputPath: './webfonts',
            }
        }]
      },
      // sass
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false // In order to use 'resolve-url-loader', the url should be false.
            }
          },
          {
            // In order to use 'url()' in sass, the loader should be installed.
            loader: 'resolve-url-loader'
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true, // In order to use 'resolve-url-loader', the url should be true.
            }
          }
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // from
      filename: "index.html",  // to
      chunks: ['index']
    }),
    new MiniCssExtractPlugin({
      filename:'./[name].css'
    }),
  ],
}