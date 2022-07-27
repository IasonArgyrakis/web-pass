const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:"/web-pass",
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack:{
    devtool: 'source-map'
  },


})
