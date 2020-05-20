<template>
  <section>
    <ul id="dropdown1" class="dropdown-content">
      <li>
        <MovieSorted />
      </li>
      </ul>
      <nav class="lime">
        <div class="nav-wrapper">
          <a href="/MovieSearcher/" class="brand-logo">Movie Searcher</a>
          <ul class="right hide-on-med-and-down search-dropdown__lol">
            <!-- Dropdown Trigger --> 
            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1"
              ref="dropdown"
            >Options<i class="material-icons right"></i></a></li>
            <li>
            <Search />
            </li>    
            <router-link
              v-for="link in links"
              :key="link.url"
              tag="li"
              :to="link.url"
            ><a href="favorites.html">{{link.title}}</a></router-link>
            <li>
              <a v-if="user"
              @click.prevent="logout"
            >
              Log out
            </a>
            <a v-else @click.prevent="login" 
            >
            Log in
            </a>
            </li>
          </ul>
        </div>
      </nav>
  </section>
</template>

<script>
import {mapActions} from 'vuex'
import MovieSorted from '@/components/MovieSorted'

export default {
  data: () => ({
    links: [
      {title: 'Favorite', url: '/favorites'}, //url берется из router
    ],
    dropdown: null,
    user: null, //авторизованный юзер
  }),
  mounted() {
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      closeOnClick: false
    })
  },
  methods: {
    ...mapActions(['logoutFromFirebase', 'getUid']),
    async logout() {
      await this.logoutFromFirebase()
      this.$router.push('/login?message=logout')
    },
    login() {
      this.$router.push('/login')
    }
  },
  async created() {
    this.user = await this.getUid() 
  },
  beforeDestroy() {
    if(this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    }
  }, //Избавляемся от утечек памяти
  components: {
    MovieSorted
  }
}
</script>