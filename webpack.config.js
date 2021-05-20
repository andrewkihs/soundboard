const path = require("path");

module.exports = {
  entry: "./frontend/index.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
  resolve: {
    // root: path.resolve('./src'),
    extensions: [".js", ".jsx"],
    alias: {
      // workaround for https://github.com/aadsm/jsmediatags/issues/116
      jsmediatags: "jsmediatags/dist/jsmediatags.min.js",

      // We can restore this later if we solve issue #11
      // 'preact-compat': 'preact-compat/dist/preact-compat',
      // react: 'preact-compat/dist/preact-compat',
      // 'react-dom': 'preact-compat/dist/preact-compat'
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
