const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:"",
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack:{
    devtool: 'source-map'
  }

})
