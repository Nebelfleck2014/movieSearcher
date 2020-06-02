<template>
  <main>
    <header>
      <Navbar />
    </header>
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </main>
</template>

<script>
import Navbar from "../components/app/Navbar";
import Footer from "../components/app/Footer";

export default {
  name: "main-layout",
  components: {
    Navbar,
    Footer,
  },
};
</script>
