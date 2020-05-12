import axios from 'axios'

export default {
  state: {
    page: null
  },
  actions: {
    async fetchMovies({commit}, options) {
      //let params = new URLSearchParams(document.location.search.substring(1));
      //const pageNum = params.get('page')
      try {
        const key = process.env.VUE_APP_TMDB
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${options}`)
        return await res.data
      } catch (error) {
        commit(setError, error)
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
    }
  }
}