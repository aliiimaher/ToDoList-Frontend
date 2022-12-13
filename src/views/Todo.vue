<template>
  <div class="main-container">
    <div class="container">
      <div v-for="(item, index) in todos" :key="index">
        <SingleTodo :title="item.text" />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import SingleTodo from "@/components/SingleTodo";
import axios from "axios";

export default {
  name: "Todo",
  components: { SingleTodo },
  data() {
    return {
      // todos: ["task1", "task2", "task3", "task4", "task5", "task6"]
      todos: [],
    };
  },
  beforeMount() {
    axios
      .get(`/list/${this.$route.params.id}`)
      .then((response) => {
        console.log(response);
        this.todos = response.data.tasks;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
* {
  color: #f0f0f0;
}

.container {
  width: 80%;
  margin: 0 auto;
}
.main-container {
  margin-top: 120px;
}
</style>
