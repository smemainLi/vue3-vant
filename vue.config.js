module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? "http://abit.wyw.com" : "",
  outputDir: 'dist',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8989,
    https: false,
    proxy: {
      '/api': {
        target: 'http://abit.wyw.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}