<template>
  <section>
    <div class="movies">
      <Loader v-if="loading" />
      <MovieCard v-else :allMovies="allMovies.results"/>
    </div>
    <div class="pagination">   
      <Pagination :current="currentPage" :total="totalMovies" :perPage="perPage" @page-changed="getMovies" />
    </div>
  </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: 'Home',
  data: () => ({
    loading: true,
    totalMovies: 0,
    currentPage: 1,
    perPage: 20 
  }),
  methods: {
    ...mapActions(['setSearchQuery', 'search']), //
    async getMovies(page) {
      this.movies = await this.$store.dispatch("fetchMovies", page)
      this.totalMovies = await parseInt(this.allMovies.total_results) //общее кол-во фильмов
      this.currentPage = page
      this.loading = false
      window.scrollTo({ top: 0, behavior: 'smooth' }) // прокрутка к началу страницы
      //this.$router.push(`${this.$route.path}?page=${page}`) // номер текущей страницы в адр.строке
    },
  },
  created: function() {
    this.getMovies(this.currentPage)
  },
  computed: {
    allMovies() {
      return this.$store.state.allMovies
    }
  },
  components: {
  },
}
</script>
