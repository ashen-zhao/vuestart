import Vue from 'vue'
import Vuex from 'vuex'
import {CARD_LIST} from './mutations-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardList:[]
  },
  mutations: {
    [CARD_LIST](state, card) {
      state.cardList.push(card)
    }
  },
  actions: {

  }
})
