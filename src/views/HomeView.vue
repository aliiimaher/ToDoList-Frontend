<template>
  <div class="container">
    <div>
      <router-link to="/signup">
        <Button1 name="Sign Up" class="btn"></Button1>
      </router-link>
    </div>
    <div>
      <router-link to="/login">
        <Button1 name="Login" class="btn"></Button1>
      </router-link>
    </div>
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
  display: flex;
  justify-content: space-between;
  padding: 200px 160px;
}

* {
  color: #f0f0f0;
}

.card1 {
  display: flex;
  margin-top: 160px;
  flex-direction: column-reverse;
}
@media screen and (min-width: 1000px) {
  .card1 {
    flex-direction: row;
  }

  .card2 {
    display: flex;
  }

  .card3 {
    display: flex;
    flex-direction: column-reverse;
  }

  .card4 {
    display: flex;
  }
}
.card2,
.card3,
.card4 {
  margin-top: 240px;
}
</style>
