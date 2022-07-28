const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:"/dist",
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack:{
    devtool: 'source-map'
  }

})
