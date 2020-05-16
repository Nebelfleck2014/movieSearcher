<template>
  <Loader v-if="loading"/>
  <MovieCard v-else :allMovies="searchMovies"/>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'movieSearch',
  computed: {
    ...mapState( 'search', ['loading', 'searchMovies']), //seacrh - store module
    }
  }
</script>