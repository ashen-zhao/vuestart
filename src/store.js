import Vue from 'vue'
import Vuex from 'vuex'
import {CARD_LIST,DUANZI,HID_NAV} from './mutations-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hidnav:false,
    cardList:[],
    duanziList:[]
  },
  mutations: {
    [CARD_LIST](state, card) {
      state.cardList.push(card)
    },
    [DUANZI](state,list) {
      state.duanziList = list
    },
    [HID_NAV](state, hid) {
      state.hidnav = hid
    }
  },
  actions: {

  }
})
