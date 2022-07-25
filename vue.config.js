const port = process.env.port || 81;
const PrerenderSPAPlugin = require('prerender-spa-plugin');

const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: false,
  publicPath: './',
  outputDir: 'dist',
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    port,
    open: true,
    https: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        components: resolve('src/components'),
        views: resolve('src/views'),
        utils: resolve('src/utils'),
        api: resolve('src/api'),
        assets: resolve('src/assets'),
      },
    },
    entry: {
      mainMch: path.resolve(__dirname, './src/mainMch.js'),
      mainSpr: path.resolve(__dirname, './src/mainSpr.js'),
      mainHelp: path.resolve(__dirname, './src/mainHelp.js'),
      main: path.resolve(__dirname, './src/main.js'),
      main1: path.resolve(__dirname, './src/main1.js'),
      main2: path.resolve(__dirname, './src/main2.js'),
      main3: path.resolve(__dirname, './src/main3.js'),
      main4: path.resolve(__dirname, './src/main4.js'),
    },
    externals:{
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex':'Vuex'
    },
    plugins: [
      new PrerenderSPAPlugin({

        // Required - The path to the webpack-outputted app to prerender.

        staticDir: path.join(__dirname, 'dist'),

        // Required - Routes to render.

        routes: ['/', '/HomePage'],

      }),
      new HtmlWebpackPlugin({
        template: "public/index.html",
        filename: 'index.html',
        chunks: ['main'],
        hash: true
      }),
      new HtmlWebpackPlugin({
        template: "public/index.html",
        filename: 'jhpay/agreement_mch.html',
        chunks: ['mainMch'],
        hash: true
      }),
      new HtmlWebpackPlugin({
        template: "public/index.html",
        filename: 'jhpay/agreement.html',
        chunks: ['mainSpr'],//引入的js文件
        hash: true
      }), new HtmlWebpackPlugin({
        template: "public/index.html",
        filename: 'jhpay/annexOne.html',
        chunks: ['main1'],
        hash: true
      }), new HtmlWebpackPlugin({
        template: "public/index.html",
        filename: 'jhpay/annexTwo.html',
        chunks: ['main2'],
        hash: true
      }), new HtmlWebpackPlugin({
        template: "public/index.html",
        filename: 'jhpay/annexThree.html',
        chunks: ['main3'],
        hash: true
      }),
      new HtmlWebpackPlugin({
        template: "public/index.html",
        filename: 'jhpay/annexFour.html',
        chunks: ['main4'],
        hash: true
      }),
      new HtmlWebpackPlugin({
        template: "public/index.html",
        filename: 'jhpay/help.html',
        chunks: ['mainHelp'],
        hash: true
      })
    ],
  },

};
