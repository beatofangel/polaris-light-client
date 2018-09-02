import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: 'zh'
  },
  mutations: {
    setLanguage (state, payload) {
      state.language = payload.language
    }
  },
  actions: {
    setLanguage (context, payload) {
      context.commit('setLanguage', payload)
    }
  },
  getters: {
    getLanguage (state) {
      return state.language
    }
  }
})
