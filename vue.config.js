const {defineConfig} = require('@vue/cli-service')
const githubPage = require('./package').name
module.exports = defineConfig({
    publicPath: "/"+githubPage,
    transpileDependencies: [
        'vuetify'
    ],
    configureWebpack: {
        devtool: 'source-map'
    },


})
