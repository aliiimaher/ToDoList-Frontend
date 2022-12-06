<template>
  <div class="container">
    <div class="card1">
      <div>
        <h1>
          Schedule Your Life
          <Button1 name="Start Now" @click="$router.push('/signup')"></Button1>
        </h1>
      </div>
      <div>
        <img src="../assets/Schedule.svg" alt="" />
      </div>
    </div>
    <div class="card2">
      <div>
        <img src="../assets/Write.svg" alt="" />
      </div>
      <div>
        <h1>Write Your Tasks!</h1>
        <Button1 name="Sign-Up Now" @click="$router.push('/signup')"></Button1>
      </div>
    </div>
    <div class="card3">
      <div>
        <h1>Handle Your Works Better :)</h1>
        <Button1 name="Let’s Go!" @click="$router.push('/signup')"></Button1>
      </div>
      <div>
        <img src="../assets/Handle.svg" alt="" />
      </div>
    </div>
    <div class="card4">
      <div>
        <img src="../assets/Teamwork.svg" alt="" />
      </div>
      <div>
        <h1>Team Work</h1>
        <Button1 name="Get Started" @click="$router.push('/signup')"></Button1>
      </div>
    </div>
  </div>
</template>

<script>
// import Button1 from "../components/Button1"
import Button1 from "@/components/Button1";

export default {
  name: "HomeView",
  components: { Button1 },
};
</script>

<style scoped>
.container {
  /*text-align: center;*/
}

* {
  color: #f0f0f0;
}

router-link {
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
