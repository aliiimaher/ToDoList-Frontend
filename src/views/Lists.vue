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
import List from "@/components/List.vue";

export default {
  name: "Lists",
  components: {List},
  data() {
    return {
      lists: [
        "list1", "list2", "list3", "list4", "list5"
      ]
    }
  }

}

</script>

<style scoped>

.container {
  width: 80%;
  margin: 0 auto;
}

.main-container {
  margin-top: 120px;
}
</style>