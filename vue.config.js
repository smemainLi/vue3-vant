const path = require('path');

const proxys = {
  '/wx': {
    target: 'http://10.10.21.57:9090',
    ws: true,
    changeOrigin: true
  }
}

module.exports = {
  /* baseUrl: process.env.NODE_ENV === "production" ? "http://abit.wyw.com" : "", */
  outputDir: 'dist',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8989,
    https: false,
    disableHostCheck: true,
    hotOnly: false,
    proxy: process.env.NODE_ENV === 'development' ? proxys : null
  },


  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },

}


function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/css/css.scss'),
      ],
    })
}