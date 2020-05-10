<template>
  <div class="row">
    <div class="col s12 m4 card-wrapper" v-for="movie in movies" :key="movie.id">
      
      <div class="card">
        <div class="card-image">
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />
          <i class="medium material-icons favorite" title="Add to Favorites"
            >favorite</i
          >
        </div>
        <div class="card-content movie-card__content">
          <h5 class="movie-title">
            <a href="">{{ movie.title }}</a>
          </h5>
          <p class="vote">Average Vote: {{ movie.vote_average }}</p>
        </div>
        <div class="card-action">
          <a href="single.html">More Info</a>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props: ["movies"]
};
</script>
