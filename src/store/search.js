import axios from "axios";

export default {
  namespaced: true,
  state: {
    searchQuery: "", // поисковый запрос
    searchMovies: null, // найденные фильмы
    loading: false, //loader
  },
  actions: {
    //Search actions

    setSearchQuery({ commit }, searchQuery) {
      commit("setSearchQuery", searchQuery);
    },
    async search({ commit, state }) {
      commit("setLoading", true);
      try {
        const key = process.env.VUE_APP_TMDB;
        const res = await axios.get(
          ` https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${state.searchQuery}&page=1&include_adult=false`
        );
        commit("setSearchMovies", res.data.results);
      } catch (error) {
        console.log(error)
      }
      commit("setLoading", false);
    },
  },
  mutations: {
    //Поиск фильмов

    setSearchQuery: (state, searchQuery) => (state.searchQuery = searchQuery), //поисковый запрос
    setLoading: (state, loading) => (state.loading = loading),
    setSearchMovies: (state, data) => (state.searchMovies = data), //найденные фильмы
    resetSearchMovies: (state) => (state.searchMovies = []),
  },
};
