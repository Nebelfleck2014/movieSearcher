import axios from 'axios'

export default {
  actions: {
    async fetchMovies({commit}, options) {
      try {
        const key = process.env.VUE_APP_TMDB
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${options}`)
        commit('setMovies', res.data)
      } catch (error) {
        throw error
      }
    },
    async fetchMovieById({commit}, movieId) {
      try {
        const key = process.env.VUE_APP_TMDB
        const movie = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`)
        return movie.data
      } catch (error) {
        commit(setError, error)
      }
    },
    async fetchCast({commit}, movieId) {
      try {
        const key = process.env.VUE_APP_TMDB
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&append_to_response=credits`)
        return res.data.credits
      } catch (error) {
        commit(setError, error)
      }
    },
    async fetchSimilarMovies({commit}, movieId) {
      try {
        const key = process.env.VUE_APP_TMDB
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${key}&language=en-US&page=1`)
        return res.data.results
      } catch (error) {
        //commit(setError, error)
      }
    },
  },
}