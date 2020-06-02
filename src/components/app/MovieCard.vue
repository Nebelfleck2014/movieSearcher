<template>
  <div class="row">
    <div
      class="col s12 m4 card-wrapper"
      v-for="(movie, idx) in allMovies"
      :key="idx"
    >
      <div class="card">
        <div class="card-image card-image__default">
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />
          <i
            @click.prevent="favoriteMovies({ movie, idx })"
            class="medium material-icons favorite"
            title="Add to Favorites"
            :class="{ addToFavorite: activeMovies.includes(idx) }"
            >favorite</i
          >
        </div>
        <div class="card-content movie-card__content">
          <h5 class="movie-title">
            <a @click="$router.push('/single/' + movie.id)"
              >{{ movieTitle(movie.title) }}
              <span class="release_date"
                >({{ movieRelease(movie.release_date) }})</span
              >
            </a>
          </h5>
          <p class="vote">Average Vote: {{ movie.vote_average }}</p>
        </div>
        <div class="card-action">
          <a @click="$router.push('/single/' + movie.id)">More Info</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["allMovies"],
  data() {
    return {
      activeMovies: [], //фильмы, отмеченные как любимые
    };
  },
  methods: {
    movieRelease(date) {
      return date.split("-")[0]; // получаем только год, без числа и месяца
    },
    movieTitle(str) {
      if (str.length > 35) {
        return str.slice(0, 35) + "...";
      } else {
        return str;
      }
    }, //обрезаем длинный title
    async favoriteMovies({ movie, idx }) {
      await this.$store.dispatch("favorites/getFavorite"); //получаем хранящиеся в firebase фильмы
      const favorites = this.$store.state.favorites.favoritesMovies;
      console.log(favorites);
      const isFavoriteIdx = favorites.findIndex(
        (favMovie) => favMovie.id === movie.id
      ); //получаем id всех фильмов в категории favorites
      if (isFavoriteIdx !== -1) {
        const data = favorites.find((favMovie) => favMovie.id === movie.id).key; //получаем ключ или id удаляемого элемента
        await this.$store.dispatch("favorites/removeFavorite", data); //
        this.activeMovies = this.activeMovies.splice(
          0,
          idx,
          ...this.activeMovies
        ); //удаляем класс у фильмов
      } else {
        this.activeMovies.push(idx); //вешаем класс, если фильм есть в activeMovies
        const fvrMovie = {
          id: movie.id,
          title: movie.title,
          img: movie.poster_path,
          vote: movie.vote_average,
        }; // передаем данные в firebase database

        const index = this.allMovies.findIndex(
          (movie) => movie.id === fvrMovie.id
        );

        if (index !== -1) {
          await this.$store.dispatch("favorites/addToFavorites", fvrMovie);
          console.log("added" + movie.id);
        }
      } //если фильм уже есть в БД, то удаляем его, если нет - добавляем
    },
  },
};
</script>
