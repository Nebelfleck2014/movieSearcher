<template>
  <div class="similar-movies">
    <h4>Similar Movies</h4>
    <div class="row">

      <div class="col s12 m3"  v-for="movie in similar" :key="movie.id">
        <div class="card medium">
          <div
            class="card-image"
            :style="{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`}"
          >
            <i class="medium material-icons favorite" title="Add to Favorites"
              >favorite</i
            >
          </div>
          <div class="card-content">
            <h5 class="movie-title">
              <a href="">{{movie.title}}</a>
            </h5>
          </div>
          <div class="card-action">
            <a @click="movieInfo(movie.id)">More Info</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'SimilarMovies',
  props: ['id'],
  data: () => ({
    similar: []
  }),
  async mounted() {
    const id = this.$route.params.id 
    const similarMovies = await this.$store.dispatch('fetchSimilarMovies', id)
    this.similar = similarMovies.slice(0,8)
    console.log(this.similar)
  },
  methods:{
    movieInfo(id) {
      this.$router.push('/single/' + id)
      this.$emit('movie-changed', id)
    }
  }
}
</script>