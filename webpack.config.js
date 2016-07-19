module.exports = {
  entry: './src/js/main.js',
  output: {
    path: './dist/',
    filename: 'main.js'
  },
  devServer: {
    inline: true,
    port: 3000
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}
