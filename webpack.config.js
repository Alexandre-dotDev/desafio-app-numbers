const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
  devServer: {
    static: "./dist",
    hot: true,
    port: 3000,
    open: true,
    compress: true,
    watchFiles: ["./src/**/*.html", "./src/assets/**/*"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules",
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "App-Numbers",
      template: "./src/index.html",
      favicon: "./src/assets/icon-1.svg",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/assets", to: "assets" }],
    }),
  ],
};
