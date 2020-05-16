import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import movies from './movies'
import search from './search'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null, //Шина ошибок
    allMovies: [], //дефолтные фильмы из раздела popular
  },
  actions: {
  },
  mutations: {

    //общая шина ошибок
    setError(state, error) {
      this.error = error
    },
    clearError(state) {
      state.error = null
    },

    //популярные фильмы на главной странице, дефолтные

    setMovies: (state, allMovies) => state.allMovies = allMovies, 
  },
  getters: {
    error: state => state.error,
    allMovies: (state) => state.allMovies 
  },
  modules: {
    auth, movies, search
  }
})
