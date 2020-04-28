<template>
  <main>
    <header>
      <nav class="lime">
        <div class="nav-wrapper">
          <router-link to="/" class="brand-logo">Movie Searcher</router-link>
          <ul class="right hide-on-med-and-down">
            <li>
              <div class="search-wrapper">
                <input id="search" placeholder="Search">
                <div class="search-result"></div>
              </div>
            </li>    
            <li><router-link to="/">Home</router-link></li>
          </ul>
        </div>
      </nav>
    </header>
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </main>
</template>

<script>
import Footer from '../components/app/Footer'

export default {
  name: 'others-layout',
  components: {
    Footer
  }
}
</script>