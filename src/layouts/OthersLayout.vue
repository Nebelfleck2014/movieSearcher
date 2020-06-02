<template>
  <main>
    <header>
      <nav class="lime">
        <div class="nav-wrapper">
          <router-link to="/MovieSearcher/" class="brand-logo"
            >Movie Searcher</router-link
          >
          <ul class="right hide-on-med-and-down">
            <li><router-link to="/MovieSearcher/">Home</router-link></li>
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
import Footer from "../components/app/Footer";

export default {
  name: "others-layout",
  components: {
    Footer,
  },
};
</script>
