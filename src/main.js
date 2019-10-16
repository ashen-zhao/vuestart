import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'vant/lib/index.css';
import gallery from 'img-vuer'


Vue.prototype.$http= axios
Vue.config.productionTip = false

Vue.use(gallery, {
  swipeThreshold: 150, // 滑动阈值，默认值 100
  isIndexShow: false, // 是否显示图片序号
  useCloseButton: false, // 只通过右上角关闭键退出浏览
  preload: true, // 预加载同组图片
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
