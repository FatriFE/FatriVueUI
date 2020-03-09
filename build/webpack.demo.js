/**
 * Created by starlee on 2020/03/09.
 */
const path = require('path')
const config = require('./config')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const isProd = precess.env.NODE_ENV === 'production'

const webpackConfig = {
    mode: process.env.NODE_ENV,
    entry: './examples/entry.js',
    output: {
        path: path.resolve(process.cwd(), './examples/fatri-vue-ui/'),
        publicPath: process.env.CI_ENV || '',
        filename: '[name].[hash:7].js',
        chunkFilename: "[name].js"
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: config.alias,
        modules: ['node_modules']
    },
    devServer: {
        host: '0.0.0.0',
        port: 8085,
        publicPath: '/',
        hot: true
    },
    performance: {
        hints: false
    },
    stats: {
        children: false
    },
    module: {
        rules: [
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
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './examples/index.html',
            filename: './index.html',
            favicon: './examples/favicon.ico'
        }),
        new webpack.LoaderOptionsPlugin({
            vue: {
                compilerOptions: {
                    preserveWhitespace: false
                }
            }
        }),
        new VueLoaderPlugin()
    ]
}

module.exports = webpackConfig
