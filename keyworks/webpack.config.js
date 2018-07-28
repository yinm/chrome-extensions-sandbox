const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === 'development'

  return {
    entry: {
      background: './src/background.js',
      content: './src/content.js',
      options: './src/options.js'
    },
    output: {
      filename: '[name].js',
      path: path.join(__dirname, 'dist/assets')
    },
    devtool: IS_DEVELOPMENT ? 'cheap-module-source-map' : 'none', // ref: http://eiua-memo.tumblr.com/post/172719308488/chromeextension-unsafe-eval-%E3%82%A8%E3%83%A9%E3%83%BC%E3%81%AE%E8%A7%A3%E6%B1%BA%E6%96%B9%E6%B3%95
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
        },
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        }
      ]
    },
    resolve: {
      modules: [path.join(__dirname, 'src'), 'node_modules'],
      extensions: ['.js', '.vue'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
    },
    plugins: [
      new VueLoaderPlugin()
    ],
  }
}
