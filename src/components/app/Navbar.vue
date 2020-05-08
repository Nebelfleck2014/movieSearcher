<template>
  <section>
    <ul id="dropdown1" class="dropdown-content">
      <li>
        <form action="#">
          <p>Select Genre</p>
          <div class="genre__wrapper">
            <p>
              <label>
                <input type="checkbox" />
                <span>Action</span>
              </label>
            </p>
            <p>
              <label>
                <input type="checkbox" />
                <span>Adventure</span>
              </label>
            </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Animation</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Comedy</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Crime</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Documentary</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Drama</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Fantasy</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Family</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>History</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Horror</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Music</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Mystory</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Romance</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Science fiction</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Tv Movie</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Thriller</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>War</span>
                </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Western</span>
                  </label>
                </p>
            </div>
          </form>
          <form action="#">
            <p>Sort movies by</p>
            <div class="sort__wrapper">
              <p>
                <label>
                  <input name="group1" type="radio" checked />
                  <span>Popularity</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="group1" type="radio" checked />
                  <span>Average votes</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="group1" type="radio" checked />
                  <span>Number of votes</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="group1" type="radio" checked />
                  <span>Original title</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="group1" type="radio" checked />
                  <span>Release date</span>
                </label>
              </p>
            </div>
          </form>
        </li>
      </ul>
      <nav class="lime">
        <div class="nav-wrapper">
          <a href="/" class="brand-logo">Movie Searcher</a>
          <ul class="right hide-on-med-and-down">
            <!-- Dropdown Trigger --> 
            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1"
              ref="dropdown"
            >Options<i class="material-icons right"></i></a></li>
            <li>
              <div class="search-wrapper">
                <input id="search" placeholder="Search">
                <div class="search-result"></div>
              </div>
            </li>    
            <router-link
              v-for="link in links"
              :key="link.url"
              tag="li"
              :to="link.url"
            ><a href="favorites.html">{{link.title}}</a></router-link>
            <li>
              <a
              @click.prevent="logout"
            >
              Log out
            </a>
            </li>
          </ul>
        </div>
      </nav>
  </section>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data: () => ({
    links: [
      {title: 'Favorite', url: '/favorites'}, //url берется из router
    ],
    dropdown: null
  }),
  mounted() {
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      closeOnClick: false
    })
  },
  methods: {
    ...mapActions(['logoutFromFirebase']),
    async logout() {
      await this.logoutFromFirebase()
      this.$router.push('/login?message=logout')
    }
  },
  beforeDestroy() {
    if(this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    }
  } //Избавляемся от утечек памяти
}
</script>