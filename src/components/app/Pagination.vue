<template>
  <div class="pagination__inner">
    <a
      v-if="hasPrev()"
      class="waves-effect lime btn-small"
      @click.prevent="changePage(prevPage)"
      >Prev</a
    >
    <div class="pagination__mid">
      <ul class="pagination__mid-list">
        <li class="waves-effect" v-if="hasFirst()">
          <a href="#" @click.prevent="changePage(1)">1</a>
        </li>
        <li class="waves-effect" v-for="page in pages" :key="page">
          <a
            href="#"
            @click.prevent="changePage(page)"
            :class="{ current: current == page }"
            >{{ page }}</a
          >
        </li>
        <li class="waves-effect" v-if="hasLast()">
          <a href="#" @click.prevent="changePage(totalPages)">{{
            totalPages
          }}</a>
        </li>
      </ul>
    </div>
    <a
      v-if="hasNext()"
      class="waves-effect lime btn-small"
      @click.prevent="changePage(nextPage)"
      >Next</a
    >
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 20,
    },
    pageRange: {
      type: Number,
      default: 2,
    },
  },
  computed: {
    pages() {
      const pages = [];
      for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i);
      }
      return pages;
    },
    rangeStart() {
      const start = this.current - this.pageRange;
      return start > 0 ? start : 1;
    },
    rangeEnd() {
      const end = this.current + this.pageRange;
      return end < this.totalPages ? end : this.totalPages;
    },
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
    nextPage() {
      return this.current + 1;
    },
    prevPage() {
      return this.current - 1;
    },
  },
  methods: {
    hasFirst() {
      return this.rangeStart !== 1;
    },
    hasLast() {
      return this.rangeEnd < this.totalPages;
    },
    hasPrev() {
      return this.current > 1;
    },
    hasNext() {
      return this.current < this.totalPages;
    },
    changePage(page) {
      this.$emit("page-changed", page);
    },
  },
};
</script>
