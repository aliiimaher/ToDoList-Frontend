<template>
  <div class="container">

    <div class="card1">
      <div>
        <h1>
          Schedule
          Your Life
          <Button name="Start Now" @click="$router.push('/signup')"></Button>
        </h1>
      </div>
      <div>
        <img src="../assets/Schedule.svg" alt="">
      </div>
    </div>
    <div class="card2">
      <div>
        <img src="../assets/Write.svg" alt="">
      </div>
      <div>
        <h1>
          Write Your
          Tasks!
        </h1>
        <Button name="Sign-Up Now" @click="$router.push('/signup')"></Button>
      </div>
    </div>
    <div class=" card3
        ">
      <div>
        <h1>
          Handle Your Works Better :)
        </h1>
        <Button name="Let’s Go!" @click="$router.push('/signup')"></Button>
      </div>
      <div>
        <img src="../assets/Handle.svg" alt="">
      </div>
    </div>
    <div class="card4">
      <div>
        <img src="../assets/Teamwork.svg" alt="">
      </div>
      <div>
        <h1>
          Team Work
        </h1>
        <Button name="Get Started" @click="$router.push('/signup')"></Button>
      </div>
    </div>


  </div>
</template>

<script>
// import Button from "../components/Button"
import Button from "@/components/Button";

export default {
  name: "HomeView",
  components: {Button},
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
  .card1{
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
.card2, .card3, .card4 {
  margin-top: 240px;
}

</style>

