<template>
  <div class="similar-movies">
    <h4>Similar Movies</h4>
    <div class="row similar-movies__wrapper">
      <div class="col s12 m3" v-for="movie in similar" :key="movie.id">
        <div class="card__wrapper">
          <div class="card similar-movies__card">
            <div class="card-image similar-movies__img">
              <img
                :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              />
            </div>
            <div class="card-content similar-movies__content">
              <h5 class="similar-movie__title">
                {{ movieTitle(movie.title) }}
              </h5>
            </div>
            <div class="card-action similar-movie__link">
              <a @click="movieInfo(movie.id)">More info</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimilarMovies",
  props: ["id"],
  data: () => ({
    similar: [],
  }),
  async mounted() {
    const id = this.$route.params.id;
    const similarMovies = await this.$store.dispatch("fetchSimilarMovies", id);
    this.similar = similarMovies.slice(0, 8);
    console.log(this.similar);
  },
  methods: {
    movieInfo(id) {
      this.$router.push("/single/" + id);
      this.$emit("movie-changed", id);
    },
    movieTitle(str) {
      if (str.length > 30) {
        return str.slice(0, 30) + "...";
      } else {
        return str;
      }
    }, //обрезаем длинный title
  },
};
</script>
