<template>
  <div class="grey darken-1 empty-layout">
    <router-view />
  </div>
</template>

<script>
import messages from "@/utils/messages";

export default {
  name: "empty-layout",
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(fbError) {
      debugger;
      this.$error(messages[fbError.code] || "Something has gone wrong");
    },
  },
};
</script>
