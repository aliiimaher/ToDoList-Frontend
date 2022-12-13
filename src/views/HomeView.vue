<template>
  <div class="container">
    <div>
      <router-link to="/signup">
        <Button1 name="Sign Up" class="btn router"></Button1>
      </router-link>
    </div>
    <div>
      <router-link class="router" to="/login">
        <Button1 name="Login" class="btn router"></Button1>
      </router-link>
    </div>
  </div>
  <div class="illustration">
    <img src="@/assets/Illustration-signup.svg" alt="" />
  </div>
</template>

<script>
// import Button1 from "../components/Button1"
import Button1 from "@/components/Button1";

export default {
  name: "HomeView",
  components: { Button1 },
  beforeCreate() {
    if (this.$store.state.access) {
      this.$router.push("/lists");
    }
  },
};
</script>

<style scoped>
.container {
  margin: auto;
  padding-top: 90px;
  justify-content: space-around;
  gap: 30px;
}

* {
  color: #f0f0f0;
}
.router {
  width: 180px;
  margin: auto;
  margin-bottom: 40px;
}
.card1 {
  display: flex;
  margin-top: 160px;
  flex-direction: column-reverse;
}
@media screen and (min-width: 600px) {
  .container {
    display: flex;
  }
  .illustration {
    text-align: center;
  }
}
</style>
