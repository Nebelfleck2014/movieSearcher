import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import movies from './movies'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null //Шина ошибок
  },
  mutations: {
    setError(state, error) {
      this.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  getters: {
    error: state => state.error
  },
  actions: {
  },
  modules: {
    auth, movies
  }
})
