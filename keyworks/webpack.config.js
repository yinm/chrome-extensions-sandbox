const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    background: './src/background.js',
    content: './src/content.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist/assets')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', { modules: false }]]
            }
          }
        ]
      }
    ]
  }
}
