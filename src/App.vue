<template>
  <ButtonVue label="submit" />
  <navbar />
  <router-view/>
</template>

<script>
import Navbar from "./components/Navbar.vue"; 
export default {
 name: "App",
 components: {
  Navbar,
 },
}
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
