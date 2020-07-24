const { resolve } = require("path");

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./client/index"],
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  context: __dirname,
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /jsx?$/,
        include: resolve(__dirname, "./app"),
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
