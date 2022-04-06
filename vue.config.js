const port = process.env.port || 81;
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave:false,
  publicPath: './',
  outputDir:'dist',
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    port,
    open: true
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
  },

};
