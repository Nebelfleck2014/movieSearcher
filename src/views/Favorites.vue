<template>
  <main>
    <div class="movies">
      <Loader v-if="loading"/>
      <h4 class="center" v-else-if="!movies.length">You don't have favorites movies</h4>
      <div class="row" v-else>
        <paginate name="moviesPagination" :list="movies" :per="9">
          <div
            class="col s12 m4 card-wrapper"
            v-for="movie in paginated('moviesPagination')"
            :key="movie.id"
          >
            <div class="card">
              <div class="card-image card-image__default">
                <img :src="`https://image.tmdb.org/t/p/w500/${movie.img}`" />
                <i
                  class="medium material-icons favorite"
                  title="Add to Favorites"
                  >favorite</i
                >
              </div>
              <div class="card-content movie-card__content">
                <h5 class="movie-title">
                  <a @click="$router.push('/single/' + movie.id)">{{ movieTitle(movie.title) }}</a>
                </h5>
                <p class="vote">Average Vote: {{ movie.vote }}</p>
              </div>
              <div class="card-action">
                <a @click="removeFavs(movie.key)">Remove from favs</a>
              </div>
            </div>
          </div>
        </paginate>
      </div>
    </div>
    <div class="pagination">
      <paginate-links
        for="moviesPagination"
        :async="true"
        :show-step-links="true"
        :step-links="{
          next: '>',
          prev: '<',
        }"
        :classes="{
          '.left-arrow': ['waves-effect'],
          '.right-arrow': ['waves-effect'], // multiple classes
        }"
      >
      </paginate-links>
    </div>
  </main>
</template>

<script>

export default {
  name: "favorites",
  data: function(){
    return{
      movies: [],
      paginate: ["moviesPagination"],
      loading: true
    }
  },
  async mounted() {
    await this.$store.dispatch("favorites/getFavorite") 
    this.movies = this.$store.state.favorites.favoritesMovies //обращаемся к state модуля с namespaced
    this.loading = false
  },
  methods: {
    movieTitle(str) {
      if (str.length > 35) {
        return str.slice(0, 35) + "...";
      } else {
        return str;
      }
    }, //обрезаем длинный title
    async removeFavs(data) {
      await this.$store.dispatch("favorites/removeFavorite", data)
      await this.$store.dispatch("favorites/getFavorite") 
      this.movies = this.$store.state.favorites.favoritesMovies.filter(movie => movie.id !== data)
    }
  },
}
</script>
