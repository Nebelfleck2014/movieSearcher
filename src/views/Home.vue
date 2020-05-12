<template>
  <section>
    <div class="movies">
      <Loader v-if="loading" />
      <MovieCard v-else :movies="movies.results"/>
    </div>
    <div class="pagination">   
      <Pagination :current="currentPage" :total="totalMovies" :perPage="perPage" @page-changed="getMovies" />
    </div>
  </section>
</template>

<script>
import MovieCard from "@/components/MovieCard";
import { mapActions } from "vuex";
export default {
  name: 'Home',
  data: () => ({
    loading: true,
    movies: [],
    totalMovies: 0,
    currentPage: 1,
    perPage: 20 
  }),
  methods: {
    async getMovies(page) {
      this.movies = await this.$store.dispatch("fetchMovies", page)
      this.totalMovies = await parseInt(this.movies.total_results)
      this.currentPage = page
      this.loading = false
      //this.$router.push(`${this.$route.path}?page=${page}`) // номер текущей страницы в адр.строке
    },
  },
  created: function() {
    this.getMovies(this.currentPage)
  },
  components: {
    MovieCard
  },
}
</script>
