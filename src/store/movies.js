import axios from 'axios'

export default {
  actions: {
    async fetchMovies() {
      const key = process.env.VUE_APP_TMDB
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
      return await res.data.results
    }
  }
}