<template>
  <div class="container">

    <div class="card1">
      <div>
        <h1>
          Schedule
          Your Life
          <Button name="Start Now"></Button>
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
        <Button name="Sign-Up Now"></Button>
      </div>
    </div>


    <div class="card3">
      <div>
        <h1>
          Handle Your Works Better :)
        </h1>
        <Button name="Let’s Go!"></Button>
      </div>
      <div>
        <img src="../assets/Handle.svg" alt="">
      </div>

    </div>


    <div class="card4"></div>


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
}

.card2 {
  display: flex;
}

.card3{
  display: flex;
}

</style>

