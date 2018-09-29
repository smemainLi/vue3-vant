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
    proxy: null,
    /* {
         '/api': {
           target: 'wyw-wx.qi-cloud.com',
           ws: true,
           changeOrigin: true,
         }
       } */
  }
}