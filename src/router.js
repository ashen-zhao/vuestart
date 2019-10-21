import Vue from 'vue'
import Router from 'vue-router'
import BaisiDuanzi from './views/BaisiDuanzi.vue'
import UrlFrame from './views/UrlFrame.vue'
import BaisiPicture from './views/BaisiPicture.vue'
import BaisiVideo from './views/BaisiVideo.vue'
import BaisiAll from './views/BaisiAll.vue'

Vue.use(Router)

//处理在当前页，再次push报错的问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: "home",
      component: BaisiAll
    },
    {
      path: '/duanzi',
      name: 'duanzi',
      component: BaisiDuanzi
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/urlframe',
      name: 'urlframe',
      component: UrlFrame
    },
    {
      path: '/picture',
      name: 'picture',
      component: BaisiPicture
    },
    {
      path: '/video',
      name: 'video',
      component: BaisiVideo
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    }
  ]
})
import store from './store'
import { HID_NAV } from './mutations-types.js'

router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    return next()
  }
  let islogin = window.localStorage.getItem('isLogin') === 'true'
  if (islogin) {
    store.commit(HID_NAV, false)
    return next()
  } else {
    store.commit(HID_NAV, true)
    return next({
      name: 'login'
    })
  }
})

export default router