<template>
  <div id="app">
      
    <Title />
    <BookZone />
    <router-view />
  </div>
</template>
<script>
import Title from "./components/title/Title";
import BookZone from "./components/title/BookZone";
// eslint-disable-next-line
import Rem from "./js/rem.js";

export default {
  name: "app",
  data:()=>({
    startY:0,
    moveY:0,
    resY:0
  }),
  methods: {
  },
  components: {
    Title,
    BookZone
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f5f5f5;
}
</style>
