import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import movies from "./movieDetails";
import search from "./search";
import favorites from "./favorites";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null, //Шина ошибок
    allMovies: [],
    sort: "popularity.desc", //по дефолту популярные
    page: 1, //текущая страница
    totalResults: null,
    genres: "", //жанры
  },
  actions: {
    async fetchMovies({ commit, state }) {
      try {
        const key = process.env.VUE_APP_TMDB;
        const res = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US${state.sort}&include_adult=false&include_video=false&page=${state.page}${state.genres}`
        );
        commit("setMovies", res.data);
      } catch (error) {
        commit('setError', error)
        throw error;
      }
    },
  },
  mutations: {
    //общая шина ошибок
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },

    setMovies: (state, allMovies) => {
      state.allMovies = allMovies;
      state.totalResults = allMovies.total_results; //общее кол-во фильмов в бд
    },

    movieSorted: (state, sort) => (state.sort = sort),
    newPage: (state, page) => (state.page = page), //текущая страница
    changeGenres: (state, data) => (state.genres = data), //текущие жанры
    sortBy: (state, sort) => (state.sort = sort), //сортировка 
  },
  getters: {
    error: (state) => state.error,
    favoritesMovies: (state) => state.favoritesMovies,
  },
  modules: {
    auth,
    movies,
    search,
    favorites,
  },
});
