<template>
  <Navbar1></Navbar1>
  <router-view />
</template>

<script>
import axios from "axios";
import Navbar1 from "./components/Navbar1.vue";

export default {
  name: "App",
  components: { Navbar1 },
  beforeCreate() {
    this.$store.commit("initializeStore");

    const access = this.$store.state.access;

    if (access) {
      axios.defaults.headers.common["Authorization"] = "JWT " + access;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }
  },
};
</script>

<style>
body {
  background: linear-gradient(180deg, #171b28 0%, #141e39 49%, #401766 100%);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: sans-serif;
}

/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*}*/

/*nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
</style>
