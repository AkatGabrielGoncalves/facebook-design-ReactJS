const path = require('path');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
          loader: "babel-loader",
          },
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ]
      },
      {
        test: /.*\.(png|gif|jpe?g)$/i,
        use: [
          {
            loader:"file-loader",
          },
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  }
}