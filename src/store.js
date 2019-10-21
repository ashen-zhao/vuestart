import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import * as MutationsType from './mutations-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    hidnav: true,
    duanziList: []
  },
  mutations: {
    [MutationsType.DUANZI](state, list) {
      state.duanziList = list
    },
    [MutationsType.HID_NAV](state, hid) {
      state.hidnav = hid
    },
    [MutationsType.LOGIN](state, isOk) {
      window.localStorage.setItem('isLogin', isOk)
      state.isLogin = isOk
      window.sessionStorage.setItem("currentActive", 0);
      if (isOk) {
        state.hidnav = false
        router.replace({ name: 'home'})
      } else {
        state.hidnav = true
        router.replace({ name: 'login'})
      }
    }
  },
  actions: {

  }
})
