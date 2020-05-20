<template>
  <section>
    <div class="movies">
      <Loader v-if="loading" />
      <MovieCard v-else :allMovies="allMovies.results"/>
    </div>
    <div class="pagination"> 
      <Pagination :current="this.page" :total="this.totalResults" :perPage="perPage" @page-changed="pageChanged" />
    </div>
  </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";


export default {
  name: 'Home',
  data: function(){
    return {
      loading: true,
      perPage: 20,  //кол-во фильмов на странице
    }
  },
  methods: {
    pageChanged(page) {
      //this.$router.push(this.$route.path + '?page=' + page)
      this.$store.commit('newPage', page)
    },
    async getMovies() {
      await this.$store.dispatch("fetchMovies")
      this.loading = false
      //window.scrollTo({ top: 0, behavior: 'smooth' }) // прокрутка к началу страницы
      //this.$router.push(`${this.$route.path}?page=${page}`) // номер текущей страницы в адр.строке
    },
  },
  created() {
    this.getMovies() //запрос фильмов при создании
  },
  computed: {
    ...mapState(['totalResults', 'page', 'sort', 'genres' ]),
    sortedMovies() {
      return this.sort
    }, 
    changedGenres() {
      return this.genres
    },
    allMovies() {
      return this.$store.state.allMovies
    },
    newPage() {
      return this.page
    },
  },
  watch: {
    async sortedMovies() {
      try {
        await this.$store.dispatch('fetchMovies')
      } catch (error) {
      }
    }, //сортировка фильмов: popular, original title etc.
    async changedGenres() {
      try {
        await this.$store.dispatch('fetchMovies')
      } catch (error) {
      }
    }, //сортировка по жанрам
    async newPage() {
      try {
        await this.$store.dispatch('fetchMovies')
      } catch (error) {
      }
    }, //пагинация, смена страницы
  },
}
</script>
