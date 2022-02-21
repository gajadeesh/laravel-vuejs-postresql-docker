module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    lintOnSave: false,
    css: {
      sourceMap: true,
    },
    // devServer: {
  
    //   proxy: {
    //     '^/api': {
    //       target: process.env.VUE_APP_API_URL,
    //       changeOrigin: true,
    //       secure: true
    //     }
    //   },
    //   port: 8080
    // }
  }