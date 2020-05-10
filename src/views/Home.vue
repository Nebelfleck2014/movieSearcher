<template>
  <section>
    <div class="movies">
      <Loader  v-if="loading"/>
      <MovieCard v-else :movies="movies"/>
    </div>
    <div class="pagination">
      <a class="waves-effect lime btn-large">Back</a>
      <a class="waves-effect lime btn-large">Next</a>
    </div>
  </section>
</template>

<script>
import MovieCard from '@/components/MovieCard'
import { mapActions } from 'vuex'
export default {
  data:() => ({
    loading: true,
    movies: []
  }),
  async mounted() {
    this.movies = await this.$store.dispatch('fetchMovies')
    this.loading = false
  },
  components: {
    MovieCard
  }
};
</script>
