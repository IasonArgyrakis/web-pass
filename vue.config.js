const { defineConfig } = require('@vue/cli-service')
const githubRepo = require('./package.json').name
module.exports = defineConfig({
  publicPath:"/"+githubRepo,
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack:{
    devtool: 'source-map'
  }

})
