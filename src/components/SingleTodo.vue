<template>
  <div class="container">
    <div>
      <input type="checkbox">
      <label>{{ title }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleTodo",
  props: {
    title: {}
  }
}
</script>

<style scoped>
* {
  color: #f0f0f0;
}
</style>