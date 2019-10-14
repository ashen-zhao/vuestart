import Vue from 'vue'
import Router from 'vue-router'
import PersonInfo from './views/PersonInfo.vue'
import Baisi from './views/Baisi.vue'
import UrlFrame from './views/UrlFrame.vue'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'baisi',
      component: Baisi
    },
    {
      path: '/person',
      name: 'person',
      component: PersonInfo
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
      component:UrlFrame
    }
  ]
})
