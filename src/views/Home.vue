<template>
  <Navbar />
  <Header />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Header,
  },

  data() {
    return {
      loading: true,
      players: [],
      players_timestamp: 0,
    };
  },

  async mounted() {},
};
</script>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
