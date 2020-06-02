<template>
  <div class="search-wrapper">
    <input
      id="search"
      v-model="query"
      @input="debouncedSearch"
      placeholder="Search"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import debounce from "lodash/debounce";

export default {
  name: "search",
  computed: {
    ...mapState("search", ["searchQuery", "searchMovies"]), //search - модуль store
    query: {
      get() {
        return this.searchQuery;
      },
      set(val) {
        return this.setSearchQuery(val);
      },
    },
  },
  methods: {
    ...mapActions("search", ["setSearchQuery", "search"]), //search - модуль store
    debouncedSearch: debounce(function() {
      this.$router.push("/search/" + this.query);
      this.search();
    }, 500), //Lodash функция для 'умного' поиска
  },
};
</script>
