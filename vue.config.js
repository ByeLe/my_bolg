module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 设置路径
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.entry('app').clear().add('./src/main-prod.js')
      config.set('externals', { //  加载外部依赖，不用将这些组件打入main.js中，以减少打包体积，
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex'
      })
      config.plugin('html')
        .tap(args => {
          args[0].isOnline = true
          return args
        })
    } else {
      config.plugin('html')
        .tap(args => {
          args[0].isOnline = false
          return args
        })
    }
    config.plugin('html')
      .tap(args => {
        args[0].title = '白乐的博客'
        return args
      })
  }
}
