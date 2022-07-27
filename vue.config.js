const {defineConfig} = require('@vue/cli-service')
var githubPage = require('./package').name
module.exports = defineConfig({
    publicPath: githubPage.name,
    transpileDependencies: [
        'vuetify'
    ],
    configureWebpack: {
        devtool: 'source-map'
    },


})
