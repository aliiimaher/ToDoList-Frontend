<template>
  <div class="container">

    <div class="card1">
      <div>
        <h1>
          Schedule
          Your Life
          <Button name></Button>
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
        <h1>Write Your
          Tasks!
        </h1>
      </div>
    </div>


    <div class="card3"></div>


    <div class="card4"></div>


  </div>
</template>

<script>
import Button from "../components/Button"
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>

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

</style>

