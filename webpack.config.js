const path = require(`path`);
const CopyPlugin = require(`copy-webpack-plugin`);

module.exports = {
  mode: `development`,
  entry: `./src/js/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `./public`)
  },
  plugins: [
    new CopyPlugin([
      {
        from: `src/img`,
        to: `img`
      },
      {
        from: `src/css`,
        to: `css`
      },
      {
        from: `src/index.html`,
        to: `index.html`
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: `babel-loader`
      },
      {
        test: /\.css$/,
        loader: `style-loader!css-loader`
      }
    ]
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, `public`),
    publicPath: `http: //localhost:8080/`,
    hot: true,
    compress: true
  }
};
