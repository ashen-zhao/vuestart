import Vue from 'vue'
import Vuex from 'vuex'
import {CARD_LIST,DUANZI} from './mutations-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardList:[],
    duanziList:[]
  },
  mutations: {
    [CARD_LIST](state, card) {
      state.cardList.push(card)
    },
    [DUANZI](state,list) {
      state.duanziList = list
    }
  },
  actions: {

  }
})
