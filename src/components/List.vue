<template>
  <div class="container">
    <div>
      <h5>{{ title }}</h5>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",

  props: {
    title: {},
  }
}
</script>

<style scoped>

.container {
  background-color: #2B3246;
}

*{
  color: #f0f0f0;
}
</style>