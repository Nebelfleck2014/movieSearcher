import axios from "axios";

export default {
  namespaced: true,
  state: {
    searchQuery: "", // поисковый запрос
    searchMovies: null, // найденные фильмы
    loading: false, //loader
    page: 1,
    totalResults: null,
    perPage: 20
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
          ` https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${state.searchQuery}&page=${state.page}&include_adult=false`
        );
        commit("setSearchMovies", res.data);
      } catch (error) {
        console.log(error)
      }
      commit("setLoading", false);
    },
  },
  mutations: {
    //Поиск фильмов

    changePage: (state, page) => state.page = page,
    setSearchQuery: (state, searchQuery) => (state.searchQuery = searchQuery), //поисковый запрос
    setLoading: (state, loading) => (state.loading = loading),
    setSearchMovies: (state, data) => {
      state.searchMovies = data.results
      state.totalResults = data.total_results
    }, //найденные фильмы
    resetSearchMovies: (state) => (state.searchMovies = []),
  },
};
