<template>
  <div class="main-container">
    <div class="container">
      <SingleTodo value="checkbox1"></SingleTodo>
    </div>
  </div>
</template>

<script>
import SingleTodo from "@/components/SingleTodo";
export default {
  name: "Todo",
  components: {SingleTodo}
}
</script>

<style scoped>
* {
  color: #f0f0f0;
}

</style>