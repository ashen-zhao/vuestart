# Vue学习，新手上手demo记录(vue-cli3、vue-router、vuex、axios、sass、vant等、待续）
---

### 功能演示
---

<img style="background-color:#F6F8FA;padding:5px;" src="./screenshot/demo.gif"/>

### 实现功能-粗描淡写
1、vue-router：路由管理（页面之前的跳转、导航守卫功能等）  
2、vuex：状态管理（登录状态、导航显示状态等）  
3、vant：tab标签切换、列表展示、下拉刷新、上拉加载  
4、图片全屏浏览  
5、vue内嵌访问第三方url的iframe


### 安装
```
npm install
```

### 编译运行
```
npm run dev

```

### 打包
```
npm run build

```

---
### 问题记录：
#### 跨域问题
#### 开发环境跨域：  
在项目根目录下创建vue.config.js， 配置devServer的proxy

```
const webpack = require('webpack')
module.exports = {
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
```
#### apache服务器跨域：
打开httpd.conf文件，把这几行代码前面的注释删掉  

```
LoadModule proxy_module libexec/apache2/mod_proxy.so  
LoadModule proxy_http_module libexec/apache2/mod_proxy_http.so  
LoadModule negotiation_module libexec/apache2/mod_negotiation.so  

```
最后在此文件后面加入以下内容：

```
#反向代理
ProxyRequests Off
ProxyPass /api http://www.devashen.com
ProxyPassReverse /api http://www.devashen.com
 
#80为apache的监听端口
<proxy  http://10.10.26.152:80>
    AllowOverride None
    Order Deny,Allow
    Allow from all
</proxy>

```
附：Mac OS 搭建Web服务器，可[点击此处](https://www.jianshu.com/p/d006a34a343f)访问教程，在这里感谢该文章的作者。


#### 注：本项目数据基本来自于 百思不得姐 ，此数据仅用于学习使用，不可用于商业目的，否则后果自负。