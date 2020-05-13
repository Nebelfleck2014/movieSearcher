<template>
  <main>
      <section class="movie-info">
        <h1 class="movie__title"></h1>
        <div class="movie__inner">
          <div class="movie__left">
            <div class="poster">
              <img class="poster__image" :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="">
              <span class="poster__rating">5.9</span>
              <div>
                <a class="waves-effect lime btn">Add to faves</a>
              </div>
            </div>
          </div>

        
          <div class="movie__right">
            <div class="movie__info">
              <div class="movie__info-title">
                <h2>Original Title</h2>
                <p>{{movie.original_title}} ({{movie.original_language}})</p>
              </div>
              <div class="movie__info-tagline">
                <h2>Tagline</h2>
                <p>"{{movie.tagline}}"</p>
              </div>
              <div class="movie__info-desc">
                <h2>Description</h2>
                <p>{{movie.overview}}</p>
              </div>
              <div class="movie__info-release">
                <h2>Release Date</h2>
                <p>{{movie.release_date}}</p>
              </div>
              <div class="movie__info-genre">
                <h2>Genres</h2>
                <p>{{genres}}</p>
              </div>
              <div class="movie__info-budget">
                <h2>Budget</h2>
                <p>{{movie.budget}}$</p>
              </div>
              <div class="movie__info-credits">
                <h2>Credits</h2>
                <h2>Crew</h2>
                <div class="movie__info-person">
                  <p class="movie__info-person--name">{{directorName}}</p>
                  <p class="movie__info-person--character">Director</p>
                </div>
                <h2>Cast</h2>
                <div class="movie__info-person" v-for="actor in mainActors" :key="actor.id">
                  <p class="movie__info-person--name">{{actor.name}}</p>
                  <p class="movie__info-person--character">{{actor.character}}</p>
                </div>
              </div>
              <div class="movie__info-rating">
                <p>Average vote: {{movie.vote_average}}</p>
                <p>Number of votes: {{movie.vote_count}}</p>
                <p>Popularity: {{movie.popularity}}</p>
              </div>
            </div>
          </div>
      </div>
      </section>
      <section>
        <SimilarMovies :id='movie.id' @movie-changed="getMovie"/>
      </section>
  </main>
</template>

<script>
import _ from 'lodash'
import SimilarMovies from '@/components/SimilarMovies'

export default {
  name: 'single',
  data: () => ({
    movie: [],
    movieCast: [],
    loading: true,
    genres: '',
    directorName: '',
    mainActors: [],
  }),
  methods: {
    async getMovie() {
      const id = this.$route.params.id //должно совпадать со значением в роутере
      this.movie = await this.$store.dispatch('fetchMovieById', id)
      this.genres = this.movie.genres.map(genre => genre.name).join(', ')


      this.movieCast = await this.$store.dispatch('fetchCast', id) //Получаем список актеров и работников
      const director = _.filter(this.movieCast.crew, function(item) {
        return item.job === 'Director'
      }) //ищем в массиве режиссера фильма
      this.directorName = director[0].name

      this.mainActors = this.movieCast.cast.slice(0, 8)    
      this.loading = false
    }
  },
  mounted() {
    this.getMovie()
  },
  components: {
    SimilarMovies
  },
}
</script>