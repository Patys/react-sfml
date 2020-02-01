const path = require('path');

module.exports = {
  mode: 'production',
  entry: './react-sfml/runner.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    library: 'reactsfml',
    libraryTarget: 'var',
  }
};
