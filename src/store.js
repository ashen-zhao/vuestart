import Vue from 'vue'
import Vuex from 'vuex'
import { DUANZI, HID_NAV } from './mutations-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hidnav: false,
    duanziList: []
  },
  mutations: {
    [DUANZI](state, list) {
      state.duanziList = list
    },
    [HID_NAV](state, hid) {
      state.hidnav = hid
    }
  },
  actions: {

  }
})
