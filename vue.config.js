const webpack = require('webpack')
//参数配置：https://cli.vuejs.org/zh/config/#productionsourcemap
module.exports = {
    //部署应用包时的基本 URL
    publicPath: process.env.NODE_ENV === 'production' ? './' : './',
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
    },
    // webpack-dev-server 相关配置
    devServer: { // 设置代理
        hot: true, //热加载
        host: '0.0.0.0', //ip地址
        port: 8888, //端口
        https: false, //false关闭https，true为开启
        open: false, //自动打开浏览器
        proxy: {
            '/api': {
                target: 'https://s.budejie.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}