<template>
  <div>
    <div class="container">
      <List title="kir"/>
    </div>
  </div>
</template>

<script>
import List from "@/components/List.vue";

export default {
  name: "Lists",
  components: {List},
}

</script>

<style scoped>

.container {
  width: 80%;
  margin: 0 auto;
}
</style>