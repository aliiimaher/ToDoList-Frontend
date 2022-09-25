<template>
  <div class="main-container">
    <div class="container">
      <div v-for="(item, index) in todos" :key="index">
        <SingleTodo :title="todos[index]"/>
        <br/>
      </div>
    </div>
  </div>
</template>

<script>
import SingleTodo from "@/components/SingleTodo";

export default {
  name: "Todo",
  components: {SingleTodo},
  data() {
    return {
      todos: ["task1", "task2", "task3", "task4", "task5", "task6"]
    }
  }
}
</script>

<style scoped>
* {
  color: #f0f0f0;
}

</style>