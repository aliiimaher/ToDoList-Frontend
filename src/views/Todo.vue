<template>
  <div class="main-container">
    <div class="container">

      <div v-for="(item, index) in lists" :key="index">
        <List :title="lists[index]"/>
        <br/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo"
}
</script>

<style scoped>

</style>