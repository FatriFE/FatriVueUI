/**
 * Created by starlee on 2020/03/24.
 */
const path = require('path')
const config = require('./config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const baseConfig = {
  modules: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(vue|jsx?)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: config.jsexclude,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new VueLoaderPlugin(), new ProgressBarPlugin()]
}
