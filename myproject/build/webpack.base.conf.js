var webpack = require("webpack");
var path = require('path')
var utils = require('./utils')
var config = require('../config')
const vuxLoader = require('vux-loader')
var vueLoaderConfig = require('./vue-loader.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var extractCSS = new ExtractTextPlugin('css/[name].css?[contenthash]')
var cssLoader = extractCSS.extract(['css'])
var stylLoader = extractCSS.extract(['css', 'styl'])
var lessLoader = extractCSS.extract(['css', 'less'])

const webpackConfig = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
      extensions: ['.css', '.js', '.vue'],
      // fallback: [path.join(__dirname, '../node_modules')],
      alias: {
          'vue$': 'vue/dist/vue',
          'src': path.resolve(__dirname, '../src'),
          'common': path.resolve(__dirname, '../src/common'),
          'components': path.resolve(__dirname, '../src/components')
      }
  },
  module: {
    loaders: [
      {
        test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
        loaders: [
            //小于10KB的图片会自动转成dataUrl，
            'url?limit=10000&name=img/[hash:8].[name].[ext]',
            'image?{bypassOnDebug:true, progressive:true,optimizationLevel:3,pngquant:{quality:"65-80",speed:4}}'
        ]
      },
      {
        test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
        loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
      },
      {test: /\.css$/, loader: cssLoader},
      {test: /\.styl$/, loader: stylLoader},
      {test: /\.less$/, loader: lessLoader}
    ],
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
        include: [resolve('src'), resolve('test')]
      }
    ]
  }
}

module.exports = vuxLoader.merge(webpackConfig, { plugins: ['vux-ui'] })
