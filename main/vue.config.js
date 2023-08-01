module.exports = {
  transpileDependencies: ['common'],
  publicPath: '/main',
  chainWebpack: config => {
    config.plugin('html')
      .tap((args) => {
        args[0].title = 'qiankun-example'
        return args
      })
  },
}
