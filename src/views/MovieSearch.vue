<template>
  <section>
    <Loader v-if="loading" />
    <div class="errors" v-else-if="!searchMovies.length">
      <h5>No Results</h5>
    </div>
    <MovieCard v-else :allMovies="searchMovies" />
    <div class="pagination">
      <Pagination
        :current="this.page"
        :total="this.totalResults"
        :perPage="this.perPage"
        @page-changed="pageChanged"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "movieSearch",
  methods: {
    pageChanged(page) {
      this.$store.commit("search/changePage", page) //search - module, с namespaced true
    },
  },
  computed: {
    ...mapState("search", [
      "loading",
      "searchMovies",
      "page",
      "totalResults",
      "perPage",
    ]), //seacrh - store module
    newPage() {
      return this.page;
    },
  },
  watch: {
    async newPage() {
      try {
        await this.$store.dispatch("search/search")
      } catch (error) {}
    }, //пагинация, смена страницы
  },
};
</script>
