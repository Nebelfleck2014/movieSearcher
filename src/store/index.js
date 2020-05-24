import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import movies from './movieDetails'
import search from './search'
import favorites from './favorites'
import axios from 'axios'
import firebase from 'firebase/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null, //Шина ошибок
    allMovies: [],
    sort: 'popularity.desc', //по дефолту популярные 
    page: 1, //текущая страница
    totalResults: null, 
    genres: '', //жанры
    favoritesMovies: []
  },
  actions: {
    async fetchMovies({commit, state}) {
      try {
        const key = process.env.VUE_APP_TMDB
        const res = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US${state.sort}&include_adult=false&include_video=false&page=${state.page}${state.genres}`)
        commit('setMovies', res.data)
      } catch (error) {
        throw error
      }
    },


    async addToFavorites({dispatch, commit}, fvrMovie) {
      try {
        const uid = await dispatch('getUid')
          return await firebase.database().ref(`/users/${uid}/movies/`).push(fvrMovie)
      } catch (error) {
        throw error
      }
    },

    async getFavorite({dispatch, commit}) {
      const uid = await dispatch('getUid')
      const movies = (await firebase.database().ref(`/users/${uid}/movies/`).once('value')).val() || {}
      const data = Object.keys(movies).map(key => ({...movies[key], key}))
      commit('putFavorites', data)
    },

    async removeFavorite({dispatch, commit}, id) {
      try {
        const uid = await dispatch('getUid') //для каждого пользователя создаются свои категории
        await firebase.database().ref(`/users/${uid}/movies/${id}`).remove() //удаляем фильм
      } catch (e) {
        throw e
    }
    }
  },
  mutations: {

    //общая шина ошибок
    setError(state, error) {
      this.error = error
    },
    clearError(state) {
      state.error = null
    },

    setMovies: (state, allMovies) => { 
      state.allMovies = allMovies
      state.totalResults = allMovies.total_results //общее кол-во фильмов в бд
    },
 
    movieSorted: (state, sort) => state.sort = sort,
    newPage: (state, page) => state.page = page, //текущая страница
    changeGenres: (state, data) => state.genres = data, //текущие жанры
    sortBy: (state, sort) => state.sort= sort, //сортировка по
    putFavorites: (state, data) => state.favoritesMovies = data 
  },
  getters: {
    error: state => state.error, 
    favoritesMovies: state => state.favoritesMovies
  },
  modules: {
    auth, movies, search, favorites
  }
})
