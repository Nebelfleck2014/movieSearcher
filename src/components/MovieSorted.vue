<template>
  <div>
    <form action="#">
      <p class="sort__title">Select Genre</p>
      <div class="genre__wrapper">
        <p>
          <label>
            <input type="checkbox" value='28' v-model="checkedGenres"/>
            <span>Action</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value='12' v-model="checkedGenres"/>
            <span>Adventure</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value='16' v-model="checkedGenres"/>
            <span>Animation</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value='35' v-model="checkedGenres"/>
            <span>Comedy</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value='80' v-model="checkedGenres"/>
            <span>Crime</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value='99' v-model="checkedGenres"/>
            <span>Documentary</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value='18' v-model="checkedGenres"/>
            <span>Drama</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value="14" v-model="checkedGenres"/>
            <span>Fantasy</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value='10751' v-model="checkedGenres"/>
            <span>Family</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value='36' v-model="checkedGenres"/>
            <span>History</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value='27' v-model="checkedGenres"/>
            <span>Horror</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value='10402' v-model="checkedGenres"/>
            <span>Music</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value='9648' v-model="checkedGenres"/>
            <span>Mystory</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value='10749' v-model="checkedGenres"/>
            <span>Romance</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value='878' v-model="checkedGenres"/>
            <span>Science fiction</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value='10770' v-model="checkedGenres"/>
            <span>Tv Movie</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value='53' v-model="checkedGenres"/>
            <span>Thriller</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value='10751' v-model="checkedGenres"/>
            <span>War</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" value='37' v-model="checkedGenres"/>
            <span>Western</span>
          </label>
        </p>
      </div>
    </form>
    <form action="#">
      <p class="sort__title">Sort movies by</p>
      <div class="sort__wrapper">
        <p>
          <label>
            <input 
              name="group1" 
              type="radio" 
              checked 
              v-model="sortBy"
              value="popularity.desc"
            />
            <span>Popularity</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="group1"
              type="radio"
              checked
              v-model="sortBy"
              value="release_date.desc"
            />
            <span>Release Date</span>
          </label>
        </p>
        <p>
          <label>
            <input 
              name="group1" 
              type="radio" 
              checked 
              v-model="sortBy"
              value="original_title.desc"/>
            <span>Original Title</span>
          </label>
        </p>
        <p>
          <label>
            <input 
              name="group1" 
              type="radio" 
              checked 
              v-model="sortBy"
              value="vote_count.desc"
            />
            <span>Vote Count</span>
          </label>
        </p>
      </div>
    </form>
  </div>
</template>


<script>
import {mapState} from 'vuex'
export default {
  data:() => ({
    sortBy: '',
    checkedGenres: []
  }),
  watch: {
    ...mapState(['page']),
    async sortBy(newSort) {
      //this.$store.dispatch('movieSorted', newSort)
      this.$store.commit('sortBy', '&sort_by=' + newSort) 
    },
    checkedGenres(genresArr) {
      const genres = genresArr.join(',')
      this.$store.commit('changeGenres', '&with_genres=' + genres)
    } 
  }
}
</script>