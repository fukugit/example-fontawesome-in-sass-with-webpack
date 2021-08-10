const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  // devtool: 'none',
  entry: {
    index: './src/index.js'
  },
  output: {
    // path: `${__dirname}/docs`,
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
      // sass ローダー
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
              url: false // resolve-url-loader を利用するために必要です。
            }
          },
          {
            // SASS内で url()を利用するために必要なローダーです。
            loader: 'resolve-url-loader'
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true, // resolve-url-loader を利用するために必要です。
            }
          }
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 元HTML
      filename: "index.html",  // 出力先HTML
      chunks: ['index']
    }),
    new MiniCssExtractPlugin({
      filename:'./[name].css'
    })
  ],
}