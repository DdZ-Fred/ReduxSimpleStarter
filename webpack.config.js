module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel?presets[]=react,presets[]=es2015,presets[]=stage-1',
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
    ],
  },
};
